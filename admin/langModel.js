// TODO alarm on/off

var commands = {
    'whatTimeIsIt' : {
        icon: '',
        name: {
            'en': "What time is it?",
            'de': "Wie spät ist das?",
            'ru': "Сколько время?"
        },
        invisible: true,
        unique:    true,
        editable:  false,
        words: {
            'en': "time is it",
            'de': "zeit/spät",
            'ru': "сколько время"
        }
    },
    'whatIsYourName' : {
        icon: '',
        name: {
            'en': "What is your name?",
            'de': "Wie heißt du?",
            'ru': "Как тебя зовут?"
        },
        invisible: true,
        unique:    true,
        editable:  false,
        words: {
            'en': "your name",
            'de': "heißt du",
            'ru': "тебя зовут"
        },
        ack: {
            type: 'text',
            name: {
                'en': "Answer",
                'de': "Antwort",
                'ru': "Ответ"
            },
            default: {
                'en': "My name is Alpha/Alpha",
                'de': "Ich heiße Marvin/Marvin/Leute nennen mich Marvin",
                'ru': "Меня зовут Сонни/Сонни/Сонни моё имя"
            }
        }
    },
    'outsideTemperature' : {
        icon: '',
        name: {
            'en': "What is the outside temperature?",
            'de': "Wie kalt/warm ist draußen?",
            'ru': "Какая температура на улице?"
        },
        unique:   true,
        editable: false,
        words: {
            'en': "outside temperature",
            'de': "aussen/draußen kalt/warm/temperatur",
            'ru': "температура снаружи/улице"
        },
        args: [{
            name: {
                'en': "Outside temperature ID",
                'de': "Außentemperatur ID",
                'ru': "ID сенсора на улице '.TEMPERATURE'"
            },
            type: 'id',
            role: 'value.temperature'
        }],
        ack: {
            type: 'text',
            name: {
                'en': "Answer (use %s for value)",
                'de': "Antwort (%s wird mit Wert ersetzt)",
                'ru': "Ответ (%s заменится значением)"
            },
            default: {
                'en': "Outside temperature is %s degree",
                'de': "Temperature draußen ist %s %u",
                'ru': "Темература на улице %s %u"
            }
        }
    },
    'insideTemperature' : {
        icon: '',
        name: {
            'en': "What is the inside temperature?",
            'de': "Wie kalt/warm ist drin?",
            'ru': "Какая температура дома?"
        },
        unique:   true,
        editable: false,
        words: {
            'en': "inside temperature",
            'de': "intern/drin kalt/warm/temperatur",
            'ru': "температура дома/внутри/квартире"
        },
        args: [{
            name: {
                'en': "Inside temperature ID",
                'de': "Innentemperature ID",
                'ru': "ID сенсора дома '.TEMPERATURE'"
            },
            type: 'id',
            role: 'value.temperature'
        }],
        ack: {
            type: 'text',
            name: {
                'en': "Answer (use %s for value)",
                'de': "Antwort (%s wird mit Wert ersetzt)",
                'ru': "Ответ (%s заменится значением)"
            },
            default: {
                'en': "Inside temperature is %s degree",
                'de': "Temperature drin ist %s %u",
                'ru': "Темература дома %s %u"
            }
        }
    },
    /*'roleOnOff': {
        icon: '',
        name: {
            'en': "Switch on/off by function",
            'de': "Schalte an oder aus mit Funktion",
            'ru': "Включить/выключить приборы"
        },
        unique:   true,
        editable: false,
        words: {
            'en': "switch on/off",
            'de': "einschalten/ausschalten/ein/aus/an",
            'ru': "ключи/включи/включить/выключи/выключить/потушить/потуши/зажги/зажечь"
        },
        ack: {
            type: 'checkbox',
            name: {
                'en': "Answer with acknowledge",
                'de': "Antworten mit Bestätigung",
                'ru': "Ответить подтверждением"
            }
        }
    },
    'blindsUpDown': {
        icon: '',
        name: {
            'en': "Open/close blinds",
            'de': "Rollladen auf/zu machen",
            'ru': "Поднять опустить ставни"
        },
        unique:   true,
        editable: false,
        words: {
            'en': "blinds up/down",
            'de': "rollladen/rolllade/fenster/laden auf/zu/hoch/runter/machen",
            'ru': "ставни/окно/окна/жалюзи поднять/подними/опустить/опусти/открой/открою/открыть/закрыть/закрою/закрой"
        },
        ack: {
            type: 'checkbox',
            name: {
                'en': "Answer with acknowledge",
                'de': "Antworten mit Bestätigung",
                'ru': "Ответить подтверждением"
            }
        }
    },
    'openLock': {
        icon: '',
        name: {
            'en': "Open/close door lock",
            'de': "Türschloss auf/zu machen",
            'ru': "Открыть/закрыть замок на двери"
        },
        unique:   true,
        editable: false,
        words: {
            'en': "lock open/close",
            'de': "schloß/türschloß auf/zu",
            'ru': "замок открой/открою/открыть/закрыть/закрою/закрой"
        },
        ack: {
            type: 'checkbox',
            name: {
                'en': "Answer with acknowledge",
                'de': "Antworten mit Bestätigung",
                'ru': "Ответить подтверждением"
            },
            default: true
        }
    },*/
    'userDeviceControl' : {
        icon: '',
        name: {
            'en': "Switch something on/off",
            'de': "Schalte irgendwas an oder aus",
            'ru': "Что нибудь включить/выключить"
        },
        unique:   false,
        editable: true,
        args: [{
            name: {
                'en': "Device or variable ID",
                'de': "Gerät- oder Variablen- ID",
                'ru': "ID сенсора или переменной"
            },
            type: 'id'
        }, {
            name: {
                'en': "Value to write down",
                'de': "Wert zum Schreiben",
                'ru': "Записываемое значение"
            },
            type: 'value'
        }],
        ack: {
            type: 'text',
            name: {
                'en': "Answer",
                'de': "Antworten",
                'ru': "Ответить"
            },
            default: {
                'en': "Switched on",
                'de': "Eingeschaltet",
                'ru': "Включено"
            }
        }
    },
    'userQuery' : {
        icon: '',
        name: {
            'en': "Ask about something",
            'de': "Fragen über irgendwas",
            'ru': "Спросить о чём-нибудь"
        },
        unique:   false,
        editable: true,
        args: [{
            name: {
                'en': "Device or variable ID",
                'de': "Gerät- oder Variablen- ID",
                'ru': "ID сенсора или переменной"
            },
            type: 'id'
        }],
        ack: {
            type: 'text',
            name: {
                'en': "Answer (use %s for value)",
                'de': "Antwort (%s wird mit Wert ersetzt)",
                'ru': "Ответ (%s заменится значением)"
            },
            default: {
                'en': "%s",
                'de': "%s",
                'ru': "%s"
            }
        }
    },
    'goodBoy' : {
        icon: '',
        name: {
            'en': "You are good",
            'de': "Du bist gut",
            'ru': "Молодец"
        },
        invisible: true,
        unique:    true,
        editable:  false,
        words: {
            'en': "good",
            'de': "gut",
            'ru': "молодец/хорошая/хороший"
        },
        ack: {
            type: 'text',
            name: {
                'en': 'Answer',
                'de': 'Antwort',
                'ru': 'Ответ'
            },
            default: {
                'en': "Thank you/You are welcome",
                'de': "Danke/Freut mich",
                'ru': "Спасибо"
            }
        }
    },
    'thankYou' : {
        icon: '',
        name: {
            'en': "Thank you",
            'de': "Danke",
            'ru': "Спасибо"
        },
        invisible: true,
        unique:    true,
        editable:  false,
        words: {
            'en': "thank",
            'de': "danke",
            'ru': "спасибо"
        },
        ack: {
            type: 'text',
            name: {
                'en': 'Answer',
                'de': 'Antwort',
                'ru': 'Ответ'
            },
            default: {
                'en': "No problem/You are welcome",
                'de': "Kein problem/Bitte/Bitte sehr",
                'ru': "Пожалуйста/Всегда пожалуйста/Не за что/С радостью"
            }
        }
    }
};

// Translations for rooms
var rooms = {
    "livingRoom": {"ru" : "зал",          "de": "wohnzimmer",           "en": "living" },
    "bedroom":    {"ru" : "спальн",       "de": "schlafzimmer",         "en": "bedroom" },
    "bathroom":   {"ru" : "ванн",         "de": "bad",                  "en": "bath" },
    "office":     {"ru" : "кабинет",      "de": "arbeitszimmer/kabinet/büro","en": "working/office" },
    "nursery":    {"ru" : "детск",        "de": "kinder",               "en": "kids/child/nursery" },
    "wc":         {"ru" : "туалет",       "de": "wc",                   "en": "wc/closet" },
    "floor":      {"ru" : "прихож/вход/коридор",  "de": "diele/eingang/flur",   "en": "floor/enter" },
    "kitchen":    {"ru" : "кухня/кухне",  "de": "küche",                "en": "kitchen" },
    "everywhere": {"ru" : "везде/весь/все/всё", "de": "alle/überall",         "en": "everywhere" },
    "terrace":    {"ru" : "балкон/терасс","de": "balkon/terrasse",      "en": "balcony/terrace/patio" },
    "dinningRoom":{"ru" : "столовая",     "de": "esszimmer",            "en": "dinning" },
    "garage":     {"ru" : "гараж",        "de": "garage",               "en": "garage" },
    "stairs":     {"ru" : "лестниц",      "de": "treppe",               "en": "stair" },
    "garden":     {"ru" : "сад",          "de": "garten",               "en": "garden" },
    "court":      {"ru" : "двор",         "de": "hof",                  "en": "court/yard" },
    "guestroom":  {"ru" : "гостей",       "de": "gästezimmer/gast",     "en": "guest room" },
    "attic":      {"ru" : "кладовк",      "de": "speicher",             "en": "attic" },
    "roof":       {"ru" : "крыше/крыша",  "de": "dachstuhl",            "en": "roof" },
    "terminal":   {"ru" : "сени/сенях",   "de": "anschlussraum",        "en": "terminal" },
    "washRoom":   {"ru" : "прачечн",      "de": "waschraum",            "en": "wash room" },
    "heatRoom":   {"ru" : "котельн",      "de": "heizungsraum",         "en": "heat room" },
    "hovel":      {"ru" : "сарай/сарае",  "de": "schuppen/scheune",     "en": "hovel" },
    "summerHouse":{"ru" : "теплиц",       "de": "gartenhaus",           "en": "summer" }
};

// In room
var roomsDative = {
    "livingRoom": {"ru" : "в зале",       "de": "im Wohnzimmer",        "en": "in the living room" },
    "bedroom":    {"ru" : "в спальне",    "de": "im Schlafzimmer",      "en": "in the bedroom" },
    "bathroom":   {"ru" : "в ванной",     "de": "im Bad",               "en": "in the bath" },
    "office":     {"ru" : "в кабинете",   "de": "im Arbeitszimmer",     "en": "in the office" },
    "nursery":    {"ru" : "в детской",    "de": "im Kinderzimmer",      "en": "in the kids room" },
    "wc":         {"ru" : "в туалете",    "de": "im WC",                "en": "in wc" },
    "floor":      {"ru" : "в прихожей",   "de": "im Flur",              "en": "in the floor" },
    "kitchen":    {"ru" : "на кухне",     "de": "in der Küche",         "en": "in the kitchen" },
    "everywhere": {"ru" : "во всём доме", "de": "überall",              "en": "everywhere" },
    "terrace":    {"ru" : "на балконе",   "de": "auf dem Balkon",       "en": "on the balcony" },
    "dinningRoom":{"ru" : "в столовой",   "de": "im Esszimmer",         "en": "in the dinning room" },
    "garage":     {"ru" : "в гараже",     "de": "in der Garage",        "en": "in the garage" },
    "stairs":     {"ru" : "на лестнице",  "de": "auf der Treppe",       "en": "on the stairs" },
    "garden":     {"ru" : "в саду",       "de": "im Garten",            "en": "in the garden" },
    "court":      {"ru" : "во дворе",     "de": "im Hof",               "en": "in the court" },
    "guestroom":  {"ru" : "в гостевой",   "de": "im Gästezimmer/gast",  "en": "in the guest room" },
    "attic":      {"ru" : "в кладовке",   "de": "im Speicher",          "en": "in the attic" },
    "roof":       {"ru" : "на крыше",     "de": "im Dachstuhl",         "en": "on the roof" },
    "terminal":   {"ru" : "в сенях",      "de": "im Anschlussraum",     "en": "in the terminal" },
    "washRoom":   {"ru" : "в прачечной",  "de": "im Waschraum",         "en": "in the wash room" },
    "heatRoom":   {"ru" : "в котельной",  "de": "im Heizungsraum",      "en": "in the heat room" },
    "hovel":      {"ru" : "в сарае",      "de": "in der Schuppen",      "en": "in the hovel" },
    "summerHouse":{"ru" : "в теплице",    "de": "im Gartenhaus",        "en": "in the summer house" }
};

// Translation of roles
var roles = {
    "backlight":  {"ru" : "подсветк/светильник","de": "beleuchtung/rücklicht", "en": "back light/back light/rear light" },
    "light":      {"ru" : "свет/лампу/лампа",   "de": "licht/lampe",     "en": "light/lamp" },
    "heating":    {"ru" : "отопление/батаре",   "de": "heizung",         "en": "heating" },
    "shutter":    {"ru" : "жалюзи/ставни",      "de": "rolllade",        "en": "shutter" },
    "music":      {"ru" : "музык",              "de": "musik",           "en": "music" },
    "security":   {"ru" : "сигнал",             "de": "sicherheit",      "en": "security" },
    "lock":       {"ru" : "замок",              "de": "verschluß/schloß","en": "lock" },
    "all":        {"ru" : "всё/все",            "de": "alles",           "en": "all" }
};

// There is no this role
var rolesGenitive = {
    "light":      {"ru" : "ламп",               "de": "e Lampen",       "en": "light" },
    "backlight":  {"ru" : "подсветки",          "de": "e Beleuchtung",  "en": "back light" },
    "heating":    {"ru" : "отопленияе",         "de": "e Heizung",      "en": "heating" },
    "shutter":    {"ru" : "жалюзей",            "de": "e Rolllade",     "en": "shutter" },
    "music":      {"ru" : "музыки",             "de": "e Musik",        "en": "music" },
    "security":   {"ru" : "сигнализации",       "de": "e Sicherheitssystem", "en": "security" },
    "lock":       {"ru" : "замков",             "de": "e Verschluße",   "en": "lock" },
    "all":        {"ru" : "всего",              "de": " alles",         "en": "all" }
};

// Switch the role on/off
var rolesAccusative = {
    "light":      {"ru" : "свет",               "de": "das Licht",      "en": "light" },
    "backlight":  {"ru" : "подсветку",          "de": "die Beleuchtung","en": "back light" },
    "heating":    {"ru" : "отопление",          "de": "die Heizung",    "en": "heating" },
    "shutter":    {"ru" : "жалюзи",             "de": "die Rolllade",   "en": "shutter" },
    "music":      {"ru" : "музыку",             "de": "die Musik",      "en": "music" },
    "security":   {"ru" : "сигнализацию",       "de": "das Sicherheitssystem", "en": "security" },
    "lock":       {"ru" : "замок",              "de": "den Verschluß",  "en": "lock" },
    "all":        {"ru" : "всё",                "de": "alles",          "en": "all" }
};

function getRandomPhrase(arrOrText) {
    if (typeof arrOrText === 'string') {
        arrOrText = arrOrText.split('/');
    }

    if (typeof arrOrText === 'object') {
        if (arrOrText.length > 1) {
            var randomNumber = Math.floor(Math.random() * arrOrText.length);
            if (randomNumber > arrOrText.length - 1) {
                randomNumber = arrOrText.length - 1;
            }
            return arrOrText[randomNumber];
        } else {
            return arrOrText[0];
        }
    } else {
        return arrOrText;
    }
}

function sayIDontKnow(lang, text, args, ack, cb) {
    var toSay;
    if (lang == "ru") {
        toSay = getRandomPhrase(["Извините, но ", "Прошу прощения, но ", ""]) +
            getRandomPhrase(["Я не знаю", "Нет данных"]);
    }
    else if (lang == "de") {
        toSay = getRandomPhrase(["Entschuldigen sie. ", "Es tut mir leid. ", ""]) +
            getRandomPhrase(["Ich weiss nicht", "Keine Daten vorhanden"]);
    }
    else if (lang == "en") {
        toSay = getRandomPhrase(["I am sorry, but ", "Excus me. ", ""]) +
            getRandomPhrase(["I don't know", "No data available"]);
    }

    if (cb) {
        cb(toSay);
    } else {
        return toSay;
    }
}

function sayNoName(lang, text, args, ack, cb) {
    var toSay;

    if (lang == "ru") {
        toSay = "Обращайся ко мне как хочешь. У меня нет имени";
    }
    else if (lang == "de") {
        toSay = "Nenne mich wie du willst. Ich habe keinen Namen.";
    }
    else if (lang == "en") {
        toSay = "Call me as you wish. I don't have name";
    }

    if (cb) {
        cb(toSay);
    } else {
        return toSay;
    }
}

function sayIDontUnderstand(lang, text, args, ack, cb) {
    var toSay;
    if (lang == "ru") {
        if (!text) {
            toSay = "Я не расслышала комманду";
        }
        else{
            toSay = "Я не расслышала и поняла только " + text;
        }
    }
    else if (lang == "de") {
        if (!text) {
            toSay ="Ich habe nichts gehoert";
        }
        else{
            toSay ="Ich habe gehoert nur "+ text;
        }
    }
    else if (lang == "en") {
        if (!text) {
            toSay = "I could not hear you";
        }
        else{
            toSay = "I don't understand and could hear only " + text;
        }
    }

    cb(toSay);
}

function sayNoSuchRoom(lang, text, args, ack, cb) {
    var toSay;
    if (lang == 'en') {
        toSay = getRandomPhrase(['Room not present', 'Room not found', 'You don\'t have such a room']);
    } else
    if (lang == 'de') {
        toSay = getRandomPhrase(['Raum ist nicht gefunden', 'Es gibt kein Zimmer mit dem Namen', 'Man muss sagen im welchen Raum oder überall']);
    } else
    if (lang == 'ru') {
        toSay = getRandomPhrase(['Комната не найдена', 'Надо сказать в какой комнате или сказать везде']);
    } else {
        toSay = "";
    }

    if (cb) {
        cb(toSay);
    } else {
        return toSay;
    }
}

function sayNothingToDo(lang, text, args, ack, cb) {
    var toSay;
    if (lang == 'en') {
        toSay = getRandomPhrase(['I don\'t know, what to do', 'No action defined']);
    } else
    if (lang == 'de') {
        toSay = getRandomPhrase(['Ich weiß nicht, was ich machen soll', 'Aktion ist nicht definiert']);
    } else
    if (lang == 'ru') {
        toSay = getRandomPhrase(['Непонятно, что делать', 'Не задано действие']);
    } else {
        toSay = "";
    }

    if (cb) {
        cb(toSay);
    } else {
        return toSay;
    }
}

function sayNoSuchRole(lang, text, args, ack, cb) {
    var toSay;
    if (lang == 'en') {
        toSay = getRandomPhrase('Function not present/Function not found/You don\'t have such a device');
    } else
    if (lang == 'de') {
        toSay = getRandomPhrase('Die Rolle ist nicht gefunden/Es gibt keine Rolle mit dem Namen/Man muss sagen womit man was machen will');
    } else
    if (lang == 'ru') {
        toSay = getRandomPhrase('Устройство не найдено/Надо сказать с чем произвести действие');
    } else {
        toSay = "";
    }

    if (cb) {
        cb(toSay);
    } else {
        return toSay;
    }
}

function sayError(lang, text, args, ack, cb) {
    var toSay;
    if (lang == 'en') {
        toSay = getRandomPhrase('Error. See logs.');
    } else
    if (lang == 'de') {
        toSay = getRandomPhrase('Fehler. Sehe Logs.');
    } else
    if (lang == 'ru') {
        toSay = getRandomPhrase('Ошибка. Смотрите логи.');
    } else {
        toSay = "";
    }

    if (cb) {
        cb(toSay);
    } else {
        return toSay;
    }
}
function findMatched(cmd, _rules) {
    var matchedRules = [];

    cmd = cmd.toLowerCase();

    var ix = cmd.indexOf(';');

    if (ix != -1) cmd = cmd.substring(ix + 1);
    var cmdWords = cmd.split(' ');


    for (var r = 0; r < _rules.length; r++) {
        var rule    = _rules[r];
        if (!rule.words) continue;

        var isFound = true;

        // split rule words one time
        if (typeof rule.words === 'string') {
            // if regex
            if (rule.words[0] === '/') {
                rule.words = new RegExp(rule.words, 'i');
            } else {
                rule.words = rule.words.toLowerCase().split(' ');
            }
        }

        // if regexp
        if (rule.words instanceof RegExp) {
            isFound = rule.words.test(cmd);
        } else {
            // compare every word
            for (var j = 0; j < rule.words.length; j++) {

                if (rule.words[j].indexOf ('/') != -1) rule.words[j] = rule.words[j].split('/');

                // if one of
                if (typeof rule.words[j] === 'object') {
                    var _isFound = false;

                    for (var u = 0; u < rule.words[j].length; u++) {
                        if (cmdWords.indexOf(rule.words[j][u]) != -1) {
                            _isFound = true;
                            break;
                        }
                    }

                    if (!_isFound){
                        isFound = false;
                        break;
                    }
                }
                else
                if (cmdWords.indexOf(rule.words[j]) === -1) {
                    isFound = false;
                    break;
                }
            }
        }

        if (isFound) {
            matchedRules.push(r);
            if (rule._break) break;
        }
    }
    return matchedRules;
}


if (typeof module !== 'undefined' && module.parent) {
    module.exports = {
        commands:           commands,
        rooms:              rooms,
        roles:              roles,
        rolesAccusative:    rolesAccusative,
        rolesGenitive:      rolesGenitive,
        roomsDative:        roomsDative,
        getRandomPhrase:    getRandomPhrase,
        sayIDontKnow:       sayIDontKnow,
        sayNoName:          sayNoName,
        sayIDontUnderstand: sayIDontUnderstand,
        sayNoSuchRoom:      sayNoSuchRoom,
        sayNoSuchRole:      sayNoSuchRole,
        sayNothingToDo:     sayNothingToDo,
        sayError:           sayError,
        findMatched:        findMatched
    };
}