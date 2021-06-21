
'use strict';

document.addEventListener('DOMContentLoaded', () => {
    let emojiesKeyboard = document.querySelector('.emojies-keyboard-wrapper'),
        showContainerButton = document.querySelector('#keyboardPicker'),
        emojiesPage = document.querySelector('.keyboard-emojies-page'),
        recentPage = document.querySelector('.keyboard-recent-page'),
        showEmojiesButton = document.querySelector('#s1'),
        showRecentButton = document.querySelector('#s2'),
        textareaField = document.getElementById('textarea');

    const data = [{
            "title": "Эмоции",
            "items": ["😀", "😃", "😄", "😁", "😅", "😆", "😂", "🤣", "😉", "😊", "☺", "🙂", "🙃", "😇", "😗", "😙", "😚", "😘", "😍", "🥰", "🤩", "🤗", "😋", "😜", "🤪", "😛", "😝", "🤑", "🤭", "🤐", "🤫", "😶", "🤔", "🤨", "🧐", "😐", "😑", "🙄", "😬", "🤥", "😏", "😌", "🤤", "😴", "🤓", "😎", "🥳", "🤠", "😒", "😔", "😪", "😕", "😟", "🙁", "☹", "😮", "😯", "😲", "😳", "🥺", "😦", "😧", "😨", "😰", "😥", "😢", "😭", "😱", "😖", "😣", "😞", "😓", "😩", "😫", "😷", "🤒", "🤕", "🤢", "🤮", "🤧", "🥶", "🥵", "🥴", "😵", "🤯", "😤", "😠", "😡", "🤬", "😈", "👿", "💀", "☠", "💩", "🤡", "👹", "👺", "👻", "👽", "👾", "🤖", "😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "🙈", "🙉", "🙊", "🦠"],
        },
        {
            "title": "Жесты и люди",
            "items": ["👍", "👎", "👌", "✌", "🤞", "🤟", "🤘", "🤙", "🖕", "✊", "👊", "🤛", "🤜", "👈", "👉", "👆", "👇", "☝", "👋", "🤚", "🖐", "✋", "🖖", "👏", "🙌", "👐", "🤲", "🤝🏻", "🙏", "💪", "🦵", "🦶", "👂", "👃", "🧠", "🦷", "🦴", "👀", "👁", "👅", "👄", "✍", "💅", "🤳", "👫", "👭", "👬", "👩‍❤️‍💋‍👨", "👨‍❤️‍💋‍👨", "👩‍❤️‍💋‍👩", "👩‍❤️‍👨", "👨‍❤️‍👨", "👩‍❤️‍👩", "👪", "👶", "🧒", "👦", "👧", "🧑", "👱", "👨", "🧔", "👱‍♂️", "👨‍🦰", "👨‍🦱", "👨‍🦳", "👨‍🦲", "👩", "👱‍♀️", "👩‍🦰", "👩‍🦱", "👩‍🦳", "👩‍🦲", "🧓️", "👴️", "👵️", "🙍‍♂️️", "🙍‍♀️️", "🙎‍♂️", "🙎‍♀️️", "🙅‍♂️", "🙅‍♀️", "🙆‍♂️", "🙆‍♀️", "💁‍♂️", "💁‍♀️️", "🙋‍♂️", "🙋‍♀️️", "🙇‍♂️", "🙇‍♀️️", "🤦‍♂️", "🤦‍♀️", "🤷‍♂️", "🤷‍♀️", "💆‍♂️️", "💆‍♀️", "💇‍♂️️", "💇‍♀️", "🚶‍♂️️", "🚶‍♀️️", "🏃‍♂️️", "🏃‍♀️", "💃", "🕺", "🕴️", "👯‍♂️️", "👯‍♀️", "🧖‍♂️", "🧖‍♀️️", "👼", "🎅", "🤶", "🦸‍♂️", "🦸‍♀️", "🦹‍♂️", "🦹‍♀️", "🧙‍♂️", "🧙‍♀️", "🧚‍♂️", "🧚‍♀️", "🧛‍♂️", "🧛‍♀️", "🧜‍♂️", "🧜‍♀️", "🧝‍♂️", "🧝‍♀️", "🧞‍♂️", "🧞‍♀️", "🧟‍♂️", "🧟‍♀️", "👨‍⚕️", "👩‍⚕️", "👨‍🎓", "👩‍🎓", "👨‍🏫", "👩‍🏫", "👨‍⚖️", "👩‍⚖️", "👨‍🌾", "👩‍🌾", "👨‍🍳", "👩‍🍳", "👨‍🔧", "👩‍🔧", "👨‍🏭", "👩‍🏭", "👨‍💼", "👩‍💼", "👨‍🔬", "👩‍🔬", "👨‍💻", "👩‍💻", "👨‍🎤", "👩‍🎤", "👨‍🎨", "👩‍🎨", "👨‍✈️", "👩‍✈️", "👨‍🚀", "👩‍🚀", "👨‍🚒", "👩‍🚒", "👮‍♂️", "👮‍♀️", "🕵️‍♂️", "🕵️‍♀️", "💂‍♂️", "💂‍♀️", "👷‍♂️", "👷‍♀️", "🤴", "👸", "👳‍♂️", "👳‍♀️", "👲", "🧕", "🤵", "👰", "🤰", "🤱", "🛀", "🛌"],
        },
        {
            "title": "Символы",
            "items": ["💋", "❤", "💔", "❣", "💘", "💝", "💖", "💗", "💓", "💞", "💕", "💟", "💜", "🧡", "💛", "💚", "💙", "🖤", "💯", "💢", "💥", "💫", "🕳", "💣", "💬", "👁️‍🗨️", "🗨", "🗯", "💭", "💤", "🗣", "👤", "👥", "👣", "🔇", "🔊", "📢", "📣", "🔔", "🔕", "🎼", "🎵", "🎶", "⚠", "🚸", "☢", "☣", "🆚", "🆓", "🆕", "🚮", "🚾", "🚭", "✅", "♻", "⚕", "🔱", "‼", "⁉", "❓", "❗", "🆘", "⛔", "🚫", "🚳", "🚯", "🚱", "🚷", "📵", "🔞"],
        },
        {
            "title": "Животные и растения",
            "items": ["🐵", "🐒", "🦍", "🐶", "🐕", "🐩", "🐺", "🦊", "🦝", "🐱", "🐈", "🦁", "🐯", "🐅", "🐆", "🐴", "🐎", "🦄", "🦓", "🦌", "🐮", "🐂", "🐃", "🐄", "🐷", "🐽", "🐖", "🐗", "🐏", "🐑", "🐐", "🐪", "🐫", "🦙", "🦒", "🐘", "🦏", "🦛", "🐭", "🐁", "🐀", "🐹", "🐰", "🐇", "🐿", "🦔", "🦇", "🐻", "🐨", "🐼", "🦘", "🦡", "🐾", "🦃", "🐔", "🐓", "🐣", "🐤", "🐥", "🐦", "🐧", "🕊", "🦅", "🦆", "🦢", "🦉", "🦚", "🦜", "🐸", "🐊", "🐢", "🦎", "🐍", "🐲", "🐉", "🦕", "🦖", "🐳", "🐋", "🐬", "🐟", "🐠", "🐡", "🦈", "🐙", "🦀", "🦞", "🦐", "🦑", "🐚", "🐌", "🦋", "🐛", "🐜", "🐝", "🐞", "🦗", "🕷", "🕸", "🦂", "🦟", "💐", "🌸", "💮", "🏵", "🌹", "🥀", "🌺", "🌻", "🌼", "🌷", "🌳", "🌲", "🎄", "🌴", "🌵", "🌾", "🌱", "🌿", "☘", "🍀", "🍁", "🍂", "🍃", "🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘", "🌙", "🌚", "🌛", "🌜", "🌡", "☀", "🌝", "🌞", "⭐", "🌟", "🌠", "☁", "⛅", "⛈", "🌤", "🌥", "🌦", "🌧", "🌨", "🌩", "🌪", "🌫", "🌬", "💨", "🌀", "🌈", "🌂", "☂", "☔", "⛱", "⚡", "❄", "☃", "⛄", "☄", "🔥", "💦", "💧", "🌊"],
        },

        {
            "title": "Еда и напитки",
            "items": ["🍏", "🍎", "🍐", "🍅", "🥝", "🍑", "🍒", "🍓", "🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🥭", "🥥", "🥑", "🍆", "🥔", "🥕", "🌽", "🌶", "🥒", "🥬", "🥦", "🍄", "🥜", "🌰", "🍞", "🥐", "🥖", "🥨", "🥯", "🥞", "🧀", "🍖", "🍗", "🥩", "🥓", "🍔", "🍟", "🍕", "🌭", "🥪", "🌮", "🌯", "🥙", "🥚", "🍳", "🥘", "🍲", "🥣", "🥗", "🍿", "🧂", "🥫", "🍱", "🍘", "🍙", "🍚", "🍛", "🍜", "🍝", "🍠", "🍢", "🍣", "🍤", "🍥", "🥮", "🍡", "🥟", "🥠", "🥡", "🍦", "🍧", "🍨", "🍩", "🍪", "🎂", "🍰", "🧁", "🥧", "🍫", "🍬", "🍭", "🍮", "🍯", "🍼", "🥛", "☕", "🍵", "🍶", "🍾", "🍷", "🍸", "🍹", "🍺", "🍻", "🥂", "🥃", "🥤", "🥢", "🍽", "🍴", "🥄"],
        },
        {
            "title": "Спорт и активности",
            "items": ["⚽", "⚾", "🥎", "🏀", "🏐", "🏈", "🏉", "🎾", "🥏", "🎳", "🏏", "🏑", "🏒", "🥍", "🏓", "🏸", "🥊", "🥋", "🥅", "⛳", "⛸", "🎣", "🎽", "🛹", "🎿", "🛷", "🥌", "🎯", "🎱", "🎮", "🕹", "🎰", "🎲", "🧩", "♟", "🧗‍♂️️", "🧗‍♀️", "🤺", "🏇", "⛷", "🏂", "🏌️‍♂️", "🏌️‍♀️", "🏄‍♂️", "🏄‍♀️", "🚣‍♂️", "🚣‍♀️", "🏊‍♂️", "🏊‍♀️", "⛹️‍♂️", "⛹️‍♀️", "🏋️‍♂️", "🏋️‍♀️", "🚴‍♂️", "🚴‍♀️", "🚵‍♂️", "🚵‍♀️", "🤸", "🤼‍♂️", "🤼‍♀️", "🤽‍♂️", "🤽‍♀️", "🤾‍♂️", "🤾‍♀️", "🤹‍♂️", "🤹‍♀️", "🧘‍♂️", "🧘‍♀️", "🎖", "🏆", "🏅", "🥇", "🥈", "🥉"],
        },
        {
            "title": "Путешествия и транспорт",
            "items": ["🚂", "🚃", "🚄", "🚅", "🚆", "🚇", "🚈", "🚉", "🚊", "🚝", "🚞", "🚋", "🚌", "🚍", "🚎", "🚐", "🚑", "🚒", "🚓", "🚔", "🚕", "🚖", "🚗", "🚘", "🚙", "🚚", "🚛", "🚜", "🏎", "🏍", "🛵", "🚲", "🛴", "🚏", "🛣", "🛤", "🛢", "⛽", "🚨", "🚥", "🚦", "🛑", "🚧", "⚓", "⛵", "🛶", "🚤", "🛳", "⛴", "🛥", "🚢", "✈", "🛩", "🛫", "🛬", "💺", "🚁", "🚟", "🚠", "🚡", "🛰", "🚀", "🛸", "🌍", "🌎", "🌏", "🌐", "🗺", "🗾", "🧭", "🏔", "⛰", "🌋", "🗻", "🏕", "🏖", "🏜", "🏝", "🏞", "🏟", "🏛", "🏗", "🧱", "🏘", "🏚", "🏠", "🏡", "🏢", "🏣", "🏤", "🏥", "🏦", "🏨", "🏩", "🏪", "🏫", "🏬", "🏭", "🏯", "🏰", "💒", "🗼", "🗽", "⛪", "🕌", "🕍", "⛩", "🕋", "⛲", "⛺", "🌁", "🌃", "🏙", "🌄", "🌅", "🌆", "🌇", "🌉", "♨", "🌌", "🎠", "🎡", "🎢", "💈", "🎪"],
        },
        {
            "title": "Предметы",
            "items": ["🎙", "🎚", "🎛", "🎤", "🎧", "📻", "🎷", "🎸", "🎹", "🎺", "🎻", "🥁", "📯", "🎭", "🖼", "🎨", "🧵", "🧶", "🔮", "🧿", "🧸", "🃏", "🀄", "🎴", "🎃", "🎆", "🎇", "🧨", "✨", "🎈", "🎉", "🎊", "🎋", "🎍", "🎎", "🎏", "🎐", "🎑", "🧧", "🎀", "🎁", "🎗", "🎟", "🎫", "🛎", "🧳", "⌛", "⏳", "⌚", "⏰", "⏱", "⏲", "🕰", "👓", "🕶", "🥽", "🥼", "👔", "👕", "👖", "🧣", "🧤", "🧥", "🧦", "👗", "👘", "👙", "👚", "👛", "👜", "👝", "🛍", "🎒", "👞", "👟", "🥾", "🥿", "👠", "👡", "👢", "👑", "👒", "🎩", "🎓", "🧢", "⛑", "📿", "💄", "💍", "💎", "📱", "📲", "☎", "📞", "📟", "📠", "🔋", "🔌", "💻", "🖥", "🖨", "⌨", "🖱", "🖲", "💽", "💾", "💿", "📀", "🧮", "🎥", "🎞", "📽", "🎬", "📺", "📷", "📸", "📹", "📼", "🔍", "🔎", "🕯", "💡", "🔦", "🏮", "📔", "📕", "📖", "📗", "📘", "📙", "📚", "📓", "📒", "📃", "📜", "📄", "📰", "🗞", "📑", "🔖", "🏷", "💰", "💴", "💵", "💶", "💷", "💸", "💳", "🧾", "💹", "💱", "💲", "✉", "💌", "📧", "📨", "📩", "📤", "📥", "📦", "📫", "📪", "📬", "📭", "📮", "🗳", "✏", "✒", "🖋", "🖊", "🖌", "🖍", "📝", "💼", "📁", "📂", "🗂", "📅", "📆", "🗒", "🗓", "📇", "📈", "📉", "📊", "📋", "📌", "📍", "📎", "🖇", "📏", "📐", "✂", "🗃", "🗄", "🗑", "🔒", "🔓", "🔏", "🔐", "🔑", "🗝", "🔨", "⛏", "⚒", "🛠", "🗡", "⚔", "🔪", "🔫", "🏹", "🛡", "🔧", "🔩", "⚙", "🗜", "⚖", "🔗", "⛓", "🧰", "🧲", "⚗", "🧪", "🧫", "🧬", "🔬", "🔭", "📡", "💉", "💊", "🚪", "🛏", "🛋", "🚽", "🚿", "🛁", "🧴", "🧷", "🧹", "🧺", "🧻", "🧼", "🧽", "🧯", "🛒", "🚬", "⚰", "⚱", "🏺", "🗿"],
        },
        {
            "title": "Флаги",
            "items": ["🇷🇺", "🇰🇿", "🇧🇾", "🇺🇦", "🇲🇳", "🇬🇪", "🇦🇿", "🇹🇯", "🇧🇷", "🇱🇹", "🇱🇻", "🇪🇪", "🇦🇲", "🏁", "🚩", "🎌", "🏴", "🏳", "🏳️‍🌈", "🏴‍☠️", "🇦🇨", "🇦🇩", "🇦🇪", "🇦🇫", "🇦🇬", "🇦🇮", "🇦🇱", "🇦🇴", "🇦🇶", "🇦🇷", "🇦🇸", "🇦🇹", "🇦🇺", "🇦🇼", "🇦🇽", "🇧🇦", "🇧🇧", "🇧🇩", "🇧🇪", "🇧🇫", "🇧🇬", "🇧🇭", "🇧🇮", "🇧🇯", "🇧🇱", "🇧🇲", "🇧🇳", "🇧🇴", "🇧🇶", "🇧🇸", "🇧🇹", "🇧🇻", "🇧🇼", "🇧🇿", "🇨🇦", "🇨🇨", "🇨🇩", "🇨🇫", "🇨🇬", "🇨🇭", "🇨🇮", "🇨🇰", "🇨🇱", "🇨🇲", "🇨🇳", "🇨🇴", "🇨🇵", "🇨🇷", "🇨🇺", "🇨🇻", "🇨🇼", "🇨🇽", "🇨🇾", "🇨🇿", "🇩🇪", "🇩🇬", "🇩🇯", "🇩🇰", "🇩🇲", "🇩🇴", "🇩🇿", "🇪🇨", "🇪🇬", "🇪🇭", "🇪🇷", "🇪🇸", "🇪🇹", "🇪🇺", "🇫🇮", "🇫🇯", "🇫🇰", "🇫🇲", "🇫🇴", "🇫🇷", "🇬🇦", "🇬🇧", "🇬🇩", "🇬🇫", "🇬🇬", "🇬🇭", "🇬🇮", "🇬🇱", "🇬🇲", "🇬🇳", "🇬🇵", "🇬🇶", "🇬🇷", "🇬🇸", "🇬🇹", "🇬🇺", "🇬🇼", "🇬🇾", "🇭🇰", "🇭🇲", "🇭🇳", "🇭🇷", "🇭🇹", "🇭🇺", "🇮🇨", "🇮🇩", "🇮🇪", "🇮🇱", "🇮🇲", "🇮🇳", "🇮🇴", "🇮🇶", "🇮🇷", "🇮🇸", "🇮🇹", "🇯🇪", "🇯🇲", "🇯🇴", "🇯🇵", "🇰🇪", "🇰🇬", "🇰🇭", "🇰🇮", "🇰🇲", "🇰🇳", "🇰🇵", "🇰🇷", "🇰🇼", "🇰🇾", "🇱🇦", "🇱🇧", "🇱🇨", "🇱🇮", "🇱🇰", "🇱🇷", "🇱🇸", "🇱🇺", "🇱🇾", "🇲🇦", "🇲🇨", "🇲🇩", "🇲🇪", "🇲🇫", "🇲🇬", "🇲🇭", "🇲🇰", "🇲🇱", "🇲🇲", "🇲🇴", "🇲🇵", "🇲🇶", "🇲🇷", "🇲🇸", "🇲🇹", "🇲🇺", "🇲🇻", "🇲🇼", "🇲🇽", "🇲🇾", "🇲🇿", "🇳🇦", "🇳🇨", "🇳🇪", "🇳🇫", "🇳🇬", "🇳🇮", "🇳🇱", "🇳🇴", "🇳🇵", "🇳🇷", "🇳🇺", "🇳🇿", "🇴🇲", "🇵🇦", "🇵🇪", "🇵🇫", "🇵🇬", "🇵🇭", "🇵🇰", "🇵🇱", "🇵🇲", "🇵🇳", "🇵🇷", "🇵🇸", "🇵🇹", "🇵🇼", "🇵🇾", "🇶🇦", "🇷🇪", "🇷🇴", "🇷🇸", "🇷🇼", "🇸🇦", "🇸🇧", "🇸🇨", "🇸🇩", "🇸🇪", "🇸🇬", "🇸🇭", "🇸🇮", "🇸🇯", "🇸🇰", "🇸🇱", "🇸🇲", "🇸🇳", "🇸🇴", "🇸🇷", "🇸🇸", "🇸🇹", "🇸🇻", "🇸🇽", "🇸🇾", "🇸🇿", "🇹🇦", "🇹🇨", "🇹🇩", "🇹🇫", "🇹🇬", "🇹🇭", "🇹🇰", "🇹🇱", "🇹🇲", "🇹🇳", "🇹🇴", "🇹🇷", "🇹🇹", "🇹🇻", "🇹🇼", "🇹🇿", "🇺🇬", "🇺🇲", "🇺🇳", "🇺🇸", "🇺🇾", "🇺🇿", "🇻🇦", "🇻🇨", "🇻🇪", "🇻🇬", "🇻🇮", "🇻🇳", "🇻🇺", "🇼🇫", "🇼🇸", "🇽🇰", "🇾🇪", "🇾🇹", "🇿🇦", "🇿🇲", "🇿🇼"]
        }
    ];
    emojiesKeyboard.style.display = 'none';
    recentPage.style.display = 'none';
    emojiesPage.style.display = 'block';



    let editableblock = document.querySelector('.test');



    // optional "send message"

    showContainerButton.addEventListener('click', function () {

        if (emojiesKeyboard.style.display == 'none' || emojiesKeyboard.style.display == '') {
            emojiesKeyboard.style.display = 'block';
        } else {
            emojiesKeyboard.style.display = 'none';
        }
    });


    // opens keyboard on Enter
    showContainerButton.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            showContainerButton.click();
        }
    });

    // shows Emojies container

    showEmojiesButton.addEventListener('click', function () {
        if (emojiesPage.style.display == 'none' || emojiesPage.style.display == '' && showRecentButton.classList.contains('active-picker')) {
            emojiesPage.style.display = 'block';
            recentPage.style.display = 'none';
            showEmojiesButton.classList.add('active-picker');
            showRecentButton.classList.remove('active-picker');
        } else {
            recentPage.style.display = 'none';
            emojiesPage.style.display = 'block';
            showRecentButton.classList.remove('active-picker');
            showEmojiesButton.classList.add('active-picker');
        }
    });

    showEmojiesButton.addEventListener('keyup', function (event) {
        if (event.keyCode == 13) {
            showEmojiesButton.click();
        }
    })

    // shows Recent container

    showRecentButton.addEventListener('click', function () {
        if (recentPage.style.display == 'none' || recentPage.style.display == '' && showEmojiesButton.classList.contains('active-picker')) {
            recentPage.style.display = 'block';
            emojiesPage.style.display = 'none';
            showRecentButton.classList.add('active-picker');
            showEmojiesButton.classList.remove('active-picker');
        } else {
            emojiesPage.style.display = 'none';
            recentPage.style.display = 'block';
            showEmojiesButton.classList.remove('active-picker');
            showEmojiesButton.classList.add('active-picker');
        }
    });

    showRecentButton.addEventListener('keyup', function (event) {
        if (event.keyCode == 13) {
            showRecentButton.click();
        }
    })
    // creates template for stickers 

    data.forEach(el => {

        let emojiBlock = document.createElement('div');
        let rowName = document.createElement('span');
        let rowContainer = document.createElement('div');
        let emojiContainer = document.createElement('div');

        rowName.innerHTML = el.title;
        emojiBlock.classList.add('emoji-block');
        rowContainer.classList.add('row-container');
        emojiContainer.classList.add('emoji-container');
        rowName.classList.add('emoji-text');

        emojiesPage.appendChild(emojiBlock);
        emojiBlock.appendChild(rowContainer);
        rowContainer.appendChild(rowName);
        rowContainer.appendChild(emojiContainer);

        el.items.forEach((item, i) => {
            let rowItem = document.createElement('div');
            let stickerItself = document.createElement('div');
            stickerItself.innerHTML = item;
            rowItem.classList.add('emoji-sticker-wrapper');
            stickerItself.classList.add('emoji-sticker');
            emojiContainer.appendChild(rowItem);
            rowItem.appendChild(stickerItself);
            stickerItself.setAttribute('id', i);
            stickerItself.addEventListener('click', (e) => {
                if (localStorage.length <= 30) {
                    localStorage.setItem(i, stickerItself.innerHTML);
                }

                return editableblock.innerHTML += e.target.innerHTML;

            });


        });


    });

    // handles hover on sticker keyboard show button 

    showContainerButton.onmouseover = showContainerButton.onmouseout = emojiesKeyboard.onmouseover = emojiesKeyboard.onmouseout = handler;


    function handler(event) {

        if (event.type == 'mouseover') {
            emojiesKeyboard.style.display = 'block'

        }
        if (event.type == 'mouseout') {
            emojiesKeyboard.style.display = 'none'
        }
    }


    for (let key in localStorage) {
        let data = localStorage.getItem(key),
            emojiContainer = document.getElementById('c2'),
            emojiWrapper = document.createElement('div'),
            emojiItself = document.createElement('div');

        // creates recent used page
        if (data !== null) {

            emojiWrapper.classList.add('emoji-sticker-wrapper');
            emojiItself.classList.add('emoji-sticker');

            emojiItself.innerHTML = data;

            emojiContainer.appendChild(emojiWrapper);
            emojiWrapper.appendChild(emojiItself);

            emojiItself.addEventListener('click', (e) => {
                return editableblock.innerHTML += e.target.innerHTML;
            });
        }
    }


    // textarea resize 

    function resizeTextarea(event) {
        this.style.height = '26px';
        this.style.height = this.scrollHeight + 10 + 'px';
        this.parentNode.style.height = this.style.height;
    }


    editableblock.addEventListener('input', resizeTextarea);

    editableblock.addEventListener('focus', () => editableblock.innerHTML = editableblock.textContent);
    editableblock.addEventListener('input', (e) => {
        let str = simpleHighlighter(editableblock);
        editableblock.innerHTML = str;

        setEndOfContenteditable(editableblock);

    });

    // moves the cursor 

    function setEndOfContenteditable(contentEditableElement) {
        let range, selection;
        if (document.createRange) {
            range = document.createRange();
            range.selectNodeContents(contentEditableElement);
            range.collapse(false);
            selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
        } else if (document.selection) {
            range = document.body.createTextRange();
            range.moveToElementText(contentEditableElement);
            range.collapse(false);
            range.select();
        }
    }

    // hilights @mentions #hastags and email@mail.ru
    
    function simpleHighlighter(el) {
        if (el instanceof Event)
            el = this;

        const RE = /[a-zA-Z\d]+@+[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|[#@]+[a-zA-Z0-9]+[_-a-zA-Z0-9]{0,}/gmi;
        let result = el.textContent;

        return result.replace(RE, function (matchWord) {
            let className = '';
            if (matchWord[0] === '@') {
                className = 'username';
            } else if (matchWord[0] === '#') {
                className = 'hashtag';
            } else {
                className = 'email';
            }
            return `<span class="${className}">${matchWord}</span>`;
        });}
});