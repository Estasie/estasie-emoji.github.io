/**
 * Лимит на число счетчиков в одном запросе
 *
 * @type {Number}
 */
var MAX_BATCH_COUNTERS = 42;

/**
 * Интервал в миллисекундах, в течение которого счётчики склеиваются
 *
 * @type {Number}
 */
var COUNTERS_BATCH_TIMEOUT = 15;

function Counter() {
    this.guid = '';
    this.reqid = '';
    this.page = '';
    this.additional = {};

    this._inited = false;
    this._indexes = {};
    this._countersBatchData = [];
    this._counterTimerId = null;

    this.counterUrl = 'https://estasie.github.io/estasie-emoji.github.io/stats.json';
}

Counter.prototype.init = function(guid, reqid, page) {
    if (guid && reqid && page) {
        this.guid = guid;
        this.reqid = reqid;
        this.page = page;

        this._inited = true;
    }
};

Counter.prototype.setAdditionalParams = function(additionalParams) {
    this.additional = Object.assign({}, additionalParams);
};

/**
 * Отправка счётчика. Основной транспорт - sendBeacon, запасной - XMLHttpRequest. Быстро поступающие одиночные события
 * накапливаются и отправляются пачками по MAX_BATCH_COUNTERS штук.
 *
 * @param {String} name
 * @param {Number} value
 */
Counter.prototype.send = function(name, value) {
    if (!this._inited) {
        console.warn('counter is not inited');

        return;
    }

    clearTimeout(this._counterTimerId);

    if (!this._indexes[name]) {
        this._indexes[name] = 0;
    }

    var counterData = {
            counterId: this.guid,
            requestId: this.reqid,
            page: this.page,
            name: name,
            value: value,
            index: this._indexes[name],
            additional: this.additional
        },
        self = this;

    this._countersBatchData.push(counterData);

    this._indexes[name]++;

    if (this._countersBatchData.length < MAX_BATCH_COUNTERS) {
        this._counterTimerId = setTimeout(function() {
            self.sendBatchRequest();
        }, COUNTERS_BATCH_TIMEOUT);
    } else {
        sendBatchRequest();
    }
};

Counter.prototype.sendBatchRequest = function() {
    var data = JSON.stringify(this._countersBatchData);

    this._countersBatchData = [];
    this._counterTimerId = null;

    var sendBeaconPostAvailable = navigator.sendBeacon,
        sendBeaconResult = sendBeaconPostAvailable && navigator.sendBeacon(this.counterUrl, new Blob([data], {type : 'application/json'}));

    if (!sendBeaconResult) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', this.counterUrl);
        xhr.send(data);
    }
}

let counter = new Counter();

counter.init('D8F28E50-3339-11EC-9EDF-9F93090795B1', String(Math.random()).substr(2, 12), 'send test');
counter.setAdditionalParams({
    env: 'production',
    platform: 'touch'
});

counter.send('connect', performance.timing.connectEnd - performance.timing.connectStart);
counter.send('ttfb', performance.timing.responseEnd - performance.timing.requestStart);

let timeStart = Date.now();

setTimeout(function() {
    document.querySelector('.square').classList.add('black');

    counter.send('square', Date.now() - timeStart);
}, Math.random() * 1000 + 500);

let uuidv4 = function () {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

let drawData = function() {
    let html = '',
        count = 500,
        genStart = Date.now();

    for (let i = 0; i < count; i++) {
        html += `<div class="row">${uuidv4().toUpperCase()}</div>`
    }

    counter.send('generate', Date.now() - genStart);

    let drawStart = Date.now();

    document.querySelector('.statistic-result').innerHTML = html;

    requestAnimationFrame(function() {
        counter.send('draw', Date.now() - drawStart);
    });
};

document.querySelector('.send-btn').onclick = function() {
    let timeStart = Date.now();

    setTimeout(function() {
        counter.send('load', Date.now() - timeStart);

        drawData();
    }, Math.random() * 1000 + 2000);
}
