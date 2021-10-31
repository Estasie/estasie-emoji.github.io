function quantile(arr, q) {
    const sorted = arr.sort((a, b) => a - b);
    const pos = (sorted.length - 1) * q;
    const base = Math.floor(pos);
    const rest = pos - base;

    if (sorted[base + 1] !== undefined) {
        return Math.floor(sorted[base] + rest * (sorted[base + 1] - sorted[base]));
    } else {
        return Math.floor(sorted[base]);
    }
};

function prepareData(result) {
    return result.data.map(item => {
        item.date = item.timestamp.split('T')[0];

        return item;
    });
}

// TODO: реализовать
// показать значение метрики за несколько дней
function showMetricByPeriod(data, page, start, end = start) {
    if (end === start) {
        console.log(`Все метрики за ${end} `);
    } else {
        console.log(`Все метрики за период ${start} - ${end} `);
    }
    let table = {};

    table.connect = addMetricByDate(data, page, 'connect', start, end);
    table.ttfb = addMetricByDate(data, page, 'ttfb', start, end);
    table.load = addMetricByDate(data, page, 'load', start, end);
    table.generate = addMetricByDate(data, page, 'generate', start, end);
    table.draw = addMetricByDate(data, page, 'draw', start, end);
    table.session = addMetricByDate(data, page, 'session_end', start, end);

    console.table(table);

}

// показать сессию пользователя
function showSession(data, reqid, date) {
    console.log(`Метрики сессии пользователя ${reqid} за ${date}:`);
    const SampleData = data
        .filter((item) => item.requestId == reqid && item.date === date)
        .sort((a, b) => a.date - b.date);
    let table = {};

    SampleData.forEach(dataItem => {
        table[dataItem.name] = dataItem.value;
    });

    console.table(table);
}

// сравнить метрику в разных срезах

function compareMetricsDevicesDraw(data, date) {
    console.log(`Сравнение отрисовки для различных девайсов за ${date}:`);
    const firstSlice = data.filter(item => item.additional.platform === 'desktop' && item.date === date);

    const secondSlice = data.filter(item => item.additional.platform === 'touch' && item.date === date);
    let table = {};
    const fd = addMetricByDate(firstSlice, 'chat with emojies', 'draw', date);
    const sd = addMetricByDate(secondSlice, 'chat with emojies', 'draw', date);
    table.desktop = fd;
    table.touch = sd;

    console.table(table);

}

// Пример
// добавить метрику за выбранный день
function addMetricByDate(data, page, name, start, end) {
    if (end === undefined) {
        end = start;
    }

    let sampleData = data
        .filter(item => item.page == page && item.name == name && item.date >= start && item.date <= end)
        .map(item => item.value);

    let result = {};

    result.hits = sampleData.length;
    result.p25 = quantile(sampleData, 0.25);
    result.p50 = quantile(sampleData, 0.5);
    result.p75 = quantile(sampleData, 0.75);
    result.p95 = quantile(sampleData, 0.95);

    return result;
}

// рассчитывает все метрики за день
function calcMetricsByDate(data, page, start, end) {
    console.log(`Все метрики за ${start}:`);

    let table = {};
    table.connect = addMetricByDate(data, page, 'connect', start, end);
    table.ttfb = addMetricByDate(data, page, 'ttfb', start, end);
    table.load = addMetricByDate(data, page, 'load', start, end);
    table.generate = addMetricByDate(data, page, 'generate', start, end);
    table.draw = addMetricByDate(data, page, 'draw', start, end);
    table.session = addMetricByDate(data, page, 'session_end', start, end);
    return table;
};

fetch('https://shri.yandex/hw/stat/data?counterId=4154b1ca-7b5f-401e-b4bb-2b78aa08fe9e')
    .then(res => res.json())
    .then(result => {
        let data = prepareData(result);

        const mbd = calcMetricsByDate(data, 'chat with emojies', '2021-10-28');
        console.table(mbd);

        showMetricByPeriod(data, "chat with emojies", "2021-10-28", "2021-10-29");
        showSession(data, "633982288943", "2021-10-28");
        compareMetricsDevicesDraw(data, "2021-10-28");
        

        // добавить свои сценарии, реализовать функции вышe
    });
