//DEVICETYP__CHANNELTYP__EVENTUELLERSTATUS
var textMap = {
    //Geräte
    AKKU__LEVEL: "Ladezustand",
    AKKU__STATUS__0: "Erhaltungsladung",
    AKKU__STATUS__1: "Akku lädt",
    AKKU__STATUS__2: "Versorgung durch Akku",
    AKKU__STATUS__3: "Akkuzustand unbekannt",
    ALARMACTUATOR__STATE__true: "Alarm",
    ALARMACTUATOR__STATE__false: "OK",
    ALARMACTUATOR__ERROR_POWER__1: "Netzspannung fehlerhaft",
    ALARMACTUATOR__ERROR_POWER__0: "-",
    ALARMACTUATOR__ERROR_SABOTAGE__1: "Sabotage ausgelöst",
    ALARMACTUATOR__ERROR_SABOTAGE__0: "-",
    ALARMACTUATOR__ERROR_BATTERY__1: "Batterie defekt",
    ALARMACTUATOR__ERROR_BATTERY__0: "-",
    ALARMACTUATOR__ON_TIME: "Einschaltdauer",
    ALARMACTUATOR__INHIBIT: "-",
    ALARMACTUATOR__WORKING: "-",
    ALARMACTUATOR__LOWBAT__true: "Batteriestand niedrig",
    ALARMACTUATOR__LOWBAT__false: "-",
    BLIND__STOP: "Anhalten",
    BLIND__INHIBIT: "-",
    BLIND__WORKING: "-",
    BLIND__DIRECTION: "-",
    BLIND__RAMP_TIME: "** BLIND__RAMP_TIME",
    BLIND__ON_TIME: "Laufzeit der Jalousie",
    CAPACITIVE_FILLING_LEVEL_SENSOR__FILLING_LEVEL: "Füllstand",
    CAPACITIVE_FILLING_LEVEL_SENSOR__FREQ: "Frequenzwert des Sensors",
    CLIMATECONTROL_REGULATOR__ADJUSTING_COMMAND: "-",
    CLIMATECONTROL_REGULATOR__ADJUSTING_DATA: "-",
    CLIMATECONTROL_REGULATOR__STATE__true: "an",
    CLIMATECONTROL_REGULATOR__STATE__false: "aus",
    CLIMATECONTROL_REGULATOR__LEVEL: "** CLIMATECONTROL_REGULATOR__LEVEL",
    CLIMATECONTROL_REGULATOR__PRESENCE: "** CLIMATECONTROL_REGULATOR__PRESENCE",
    CLIMATECONTROL_REGULATOR__INHIBIT: "-",
    CLIMATECONTROL_REGULATOR__PARTY: "** CLIMATECONTROL_REGULATOR__PARTY",
    CLIMATECONTROL_REGULATOR__MODE__0: "Auto",
    CLIMATECONTROL_REGULATOR__MODE__1: "Komfort",
    CLIMATECONTROL_REGULATOR__MODE__2: "ECO",
    CLIMATECONTROL_REGULATOR__MODE__3: "aus",
    CLIMATECONTROL_REGULATOR__VACATION__0: "aus",
    CLIMATECONTROL_REGULATOR__VACATION__1: "geplant",
    CLIMATECONTROL_REGULATOR__VACATION__2: "aktiv",
    CLIMATECONTROL_REGULATOR__INFO: "** CLIMATECONTROL_REGULATOR__INFO",
    CLIMATECONTROL_REGULATOR__SET_INVERT__true: "Regelung invertiert",
    CLIMATECONTROL_REGULATOR__SET_INVERT__false: "-",
    CLIMATECONTROL_REGULATOR__VALUE: "Zustand des Schalters",
    CLIMATECONTROL_REGULATOR__SETPOINT_DIFF: "empfangener Stellwert vom Bedienelement",
    CLIMATECONTROL_REGULATOR__SETPOINT_DIFF_C: "umgerechnete Sollwert-Differenz",
    CLIMATECONTROL_REGULATOR__SPEED__0: "** CLIMATECONTROL_REGULATOR__SPEED__0",
    CLIMATECONTROL_REGULATOR__SPEED__1: "** CLIMATECONTROL_REGULATOR__SPEED__1",
    CLIMATECONTROL_REGULATOR__SPEED__2: "** CLIMATECONTROL_REGULATOR__SPEED__2",
    CLIMATECONTROL_REGULATOR__SPEED__3: "** CLIMATECONTROL_REGULATOR__SPEED__3",
    CLIMATECONTROL_REGULATOR__SPEED__4: "** CLIMATECONTROL_REGULATOR__SPEED__4",
    CLIMATECONTROL_REGULATOR__VALVE_STATE: "Ventilöffnung setzen",
    CLIMATECONTROL_REGULATOR__SUMMER_MODE__true: "Sommerbetrieb an",
    CLIMATECONTROL_REGULATOR__SUMMER_MODE__false: "Sommerbetrieb aus",
    CLIMATECONTROL_REGULATOR__PARTY_MODE_SUBMIT: "** CLIMATECONTROL_REGULATOR__PARTY_MODE_SUBMIT",
    CLIMATECONTROL_REGULATOR__VACATION_STOP: "** CLIMATECONTROL_REGULATOR__VACATION_STOP",
    CLIMATECONTROL_REGULATOR__SETPOINT__VENT_CLOSED: "zu",
    CLIMATECONTROL_REGULATOR__SETPOINT__VENT_OPEN: "auf",
    CLIMATECONTROL_REGULATOR__SET_INVERT: "** CLIMATECONTROL_REGULATOR__SET_INVERT",
    CLIMATECONTROL_REGULATOR__MODE_TEMPERATUR_REGULATOR__0: "automatisch",
    CLIMATECONTROL_REGULATOR__MODE_TEMPERATUR_REGULATOR__1: "manuell",
    CLIMATECONTROL_REGULATOR__MODE_TEMPERATUR_REGULATOR__2: "Party",
    CLIMATECONTROL_REGULATOR__TEMPERATUR_COMFORT_VALUE: "Komforttemperatur",
    CLIMATECONTROL_REGULATOR__TEMPERATUR_LOWERING_VALUE: "Absenktemperatur",
    CLIMATECONTROL_REGULATOR__TEMPERATUR_WINDOW_OPEN_VALUE: "Fenster-Auf-Temperatur",
    CLIMATECONTROL_REGULATOR__PARTY_END_TIME: "Party/ Urlaub-Endzeit",
    CLIMATECONTROL_RT_TRANSCEIVER__ACTUAL_TEMPERATURE: "Temperatur",
    CLIMATECONTROL_RT_TRANSCEIVER__ACTUAL_HUMIDITY: "Aktuelle Luftfeuchtigkeit",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__0: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__1: "Ventilantrieb schwergängig",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__2: "Stellbereich zu groß",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__3: "Stellbereich zu klein",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__4: "Verbindungsfehler",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__6: "Batteriestand niedrig",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__7: "Ventil Positionsfehler",
    CLIMATECONTROL_RT_TRANSCEIVER__VALVE_STATE: "Ventilöffnung",
    CLIMATECONTROL_RT_TRANSCEIVER__BOOST_MODE: "Boost",
    CLIMATECONTROL_RT_TRANSCEIVER__LOWERING_MODE: "Absenken",
    CLIMATECONTROL_RT_TRANSCEIVER__MANU_MODE: "Manuell",
    CLIMATECONTROL_RT_TRANSCEIVER__COMFORT_MODE: "Komfort",
    CLIMATECONTROL_RT_TRANSCEIVER__AUTO_MODE: "Automatisch",
    CLIMATECONTROL_RT_TRANSCEIVER__CONTROL_MODE__0: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__CONTROL_MODE__1: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__CONTROL_MODE__2: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__CONTROL_MODE__3: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__BOOST_STATE: "Boostdauer",
    CLIMATECONTROL_RT_TRANSCEIVER__BATTERY_STATE: "Batteriestatus",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_MODE: "Urlaubsmodus starten",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_MODE_SUBMIT: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_TEMPERATURE: "Einstelltemperatur",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_START: "Startzeit",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_START_TIME: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_START_DAY: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_START_MONTH: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_START_YEAR: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_STOP: "Endzeit",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_STOP_TIME: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_STOP_DAY: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_STOP_MONTH: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_STOP_YEAR: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__CLEAR_WINDOW_OPEN_SYMBOL: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__SET_SYMBOL_FOR_HEATING_PHASE: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__WINDOW_STATE__false: "geschlossen",
    CLIMATECONTROL_RT_TRANSCEIVER__WINDOW_STATE__true: "offen",
    CLIMATECONTROL_VENT_DRIVE__VALVE_STATE: "Ventilöffnung",
    CLIMATECONTROL_VENT_DRIVE__ERROR__0: "-",
    CLIMATECONTROL_VENT_DRIVE__ERROR__1: "Ventilantrieb blockiert",
    CLIMATECONTROL_VENT_DRIVE__ERROR__2: "Ventilantrieb lose",
    CLIMATECONTROL_VENT_DRIVE__ERROR__3: "Einstellungsbereich zu klein",
    CLIMATECONTROL_VENT_DRIVE__ERROR__4: "Batteriestand niedrig",
    CLIMATECONTROL_VENT_DRIVE__VALVE_OFFSET_VALUE: "Ventilantrieb Offsetstellung",
    CLIMATECONTROL_VENT_DRIVE__TEMPERATURE: "Temperatur",
    CLIMATECONTROL_VENT_DRIVE__ALARM__true: "Ventilantrieb blockiert",
    CLIMATECONTROL_VENT_DRIVE__ALARM__false: "-",
    CONDITION_POWER__DECISION_VALUE: "** CONDITION_POWER__DECISION_VALUE",
    CONDITION_CURRENT__DECISION_VALUE: "** CONDITION_CURRENT__DECISION_VALUE",
    CONDITION_VOLTAGE__DECISION_VALUE: "** CONDITION_VOLTAGE__DECISION_VALUE",
    CONDITION_FREQUENCY__DECISION_VALUE: "** CONDITION_FREQUENCY__DECISION_VALUE",
    DIGITAL_ANALOG_INPUT__VALUE: "** DIGITAL_ANALOG_INPUT__VALUE",
    DIGITAL_ANALOG_OUTPUT__FREQUENCY: "** DIGITAL_ANALOG_OUTPUT__FREQUENCY",
    DIGITAL_INPUT__FREQUENCY: "** DIGITAL_INPUT__FREQUENCY",
    DIGITAL_OUTPUT__STATE__true: "an",
    DIGITAL_OUTPUT__STATE__false: "aus",
    DIMMER__PROG_TIMER: "-",
    DIMMER__TOGGLE: "Zustand wechseln",
    DIMMER__PROG_DIM_UP: "-",
    DIMMER__PROG_DIM_DOWN: "-",
    DIMMER__OLD_LEVEL: "Letzten Dimmwert wiederherstellen",
    DIMMER__RAMP_TIME: "Dimmzeit",
    DIMMER__ON_TIME: "Einschaltdauer",
    DIMMER__RAMP_STOP: "Dimmzeit anhalten",
    DIMMER__INHIBIT: "-",
    DIMMER__WORKING: "-",
    DIMMER__DIRECTION: "-",
    DIMMER__POWER: "Aktuelle Leistung",
    DIMMER__ENERGY_COUNTER: "Aktueller Energieverbrauch",
    DIMMER__ERROR__0: "-",
    DIMMER__ERROR__1: "Ladefehler",
    DIMMER__ERROR_REDUCED__false: "-",
    DIMMER__ERROR_REDUCED__true: "Reduzierte Leistung",
    DIMMER__ERROR_OVERHEAT__false: "-",
    DIMMER__ERROR_OVERHEAT__true: "Überhitzung",
    DIMMER__ERROR_OVERLOAD__false: "-",
    DIMMER__ERROR_OVERLOAD__true: "Überlastung",
    DIMMER__LEVEL_REAL: "Realwert",
    DISPLAY__TEXT: "Anzeige",
    DISPLAY__BULB: "Lampe",
    DISPLAY__SWITCH: "Schalter",
    DISPLAY__WINDOW: "Fenster",
    DISPLAY__DOOR: "Tür",
    DISPLAY__BLIND: "Jalousie",
    DISPLAY__SCENE: "Szene",
    DISPLAY__PHONE: "Telefon",
    DISPLAY__BELL: "Klingel",
    DISPLAY__CLOCK: "Uhr",
    DISPLAY__ARROW_UP: "Pfleil hoch",
    DISPLAY__ARROW_DOWN: "Pfeil runter",
    DISPLAY__UNIT__0: "-",
    DISPLAY__UNIT__1: "%",
    DISPLAY__UNIT__2: "W",
    DISPLAY__UNIT__3: "°C",
    DISPLAY__UNIT__4: "°F",
    DISPLAY__BEEP__0: "-",
    DISPLAY__BEEP__1: "Ton 1",
    DISPLAY__BEEP__2: "Ton 2",
    DISPLAY__BEEP__3: "Ton 3",
    DISPLAY__BACKLIGHT__0: "Hintergrundbeleuchtung aus",
    DISPLAY__BACKLIGHT__1: "Hintergrundbeleuchtung an",
    DISPLAY__BACKLIGHT__2: "Hintergrundbeleuchtung langsam blinkend",
    DISPLAY__BACKLIGHT__3: "Hintergrundbeleuchtung schnell blinkend",
    DISPLAY__SUBMIT: "** DISPLAY__SUBMIT",
    DISPLAY__ALARM_COUNT: "** DISPLAY__ALARM_COUNT",
    DISPLAY__SERVICE_COUNT: "** DISPLAY__SERVICE_COUNT",
    INPUT_OUTPUT__PRESS_SHORT: "Kurzer Tastendruck",
    INPUT_OUTPUT__PRESS_LONG: "Langer Tastendruck",
    KEY__ALL_LEDS: "-",
    KEY__LED_STATUS__0: "Status aus",
    KEY__LED_STATUS__1: "Status rot",
    KEY__LED_STATUS__2: "Status grün",
    KEY__LED_STATUS__3: "Status orange",
    KEY__LED_SLEEP_MODE: "** KEY__LED_SLEEP_MODE",
    KEY__PRESS_SHORT: "Kurzer Tastendruck",
    KEY__PRESS_LONG: "Langer Tastendruck",
    KEY__SUBMIT: "** KEY__SUBMIT",
    KEY__KEYPRESS_TIME: "** KEY__KEYPRESS_TIME",
    KEY__INHIBIT: "-",
    KEY__SEND: "Snapshot",
    KEY__RESET: "Rebooten",
    KEY__WORKING: "-",
    KEY__CMD_SETS: "-",
    KEY__CMD_SETL: "-",
    KEY__CMD_RETS: "-",
    KEY__CMD_RETL: "-",
    KEY__CMD_QUERY_RET: "-",
    KEY__CMD_EXEC: "-",
    KEY__CMD_KILL: "-",
    KEYMATIC__STATE__true: "Öffnen",
    KEYMATIC__STATE__false: "Schließen",
    KEYMATIC__OPEN: "Öffnen",
    KEYMATIC__RELOCK_DELAY: "-",
    KEYMATIC__STATE_UNCERTAIN__true: "Zustand unsicher",
    KEYMATIC__STATE_UNCERTAIN__false: "-",
    KEYMATIC__DIRECTION: "-",
    KEYMATIC__INHIBIT: "-",
    KEYMATIC__ERROR__0: "-",
    KEYMATIC__ERROR__1: "Kupplungsfehler",
    KEYMATIC__ERROR__2: "Motor abgebrochen",
    MOTION_DETECTOR__BRIGHTNESS: "Helligkeit",
    MOTION_DETECTOR__SET_BRIGHTNESS: "Helligkeit setzen",
    MOTION_DETECTOR__NEXT_TRANSMISSION: "Nächste Übertragung",
    MOTION_DETECTOR__MOTION__true: "Bewegung erkannt",
    MOTION_DETECTOR__MOTION__false: "Keine Bewegung",
    MOTION_DETECTOR__SET_MOTION: "Bewegung setzen",
    MOTION_DETECTOR__ERROR__0: "-",
    MOTION_DETECTOR__ERROR__1: "Sabotage ausgelöst",
    POWER__LOWBAT: "Batteriestand niedrig",
    POWER__BAT_VOLTAGE: "Batteriespannung",
    POWERMETER__BOOT__true: "** POWERMETER__BOOT__true",
    POWERMETER__BOOT__false: "** POWERMETER__BOOT__false",
    POWERMETER__ENERGY_COUNTER: "Aktueller Energieverbrauch",
    POWERMETER__POWER: "Aktuelle Leistung",
    POWERMETER__CURRENT: "Stromstärke",
    POWERMETER__VOLTAGE: "Spannung am Schaltausgang",
    POWERMETER__FREQUENCY: "Frequenz",
    POWERMETER__SUM_1H: "Energieverbrauch der letzten Stunde",
    POWERMETER__SUM_24H: "Energieverbrauch der letzten 24 Stunden",
    POWERMETER_IGL__BOOT: "** POWERMETER_IGL__BOOT",
    POWERMETER_IGL__GAS_ENERGY_COUNTER: "Gaszähler",
    POWERMETER_IGL__GAS_POWER: "Aktuelle Leistung",
    POWERMETER_IGL__ENERGY_COUNTER: "Aktueller Gasverbrauch",
    POWERMETER_IGL__POWER: "Aktuelle Leistung",
    PULSE_SENSOR__SEQUENCE_OK: "Sequenz akzeptieren",
    RAINDETECTOR__STATE__0: "Trocken",
    RAINDETECTOR__STATE__1: "Regen",
    RAINDETECTOR_HEAT__STATE__true: "Heizung an",
    RAINDETECTOR_HEAT__STATE__false: "Heizung aus",
    RAINDETECTOR_HEAT__ON_TIME: "Einschaltdauer (Heizung)",
    RAINDETECTOR_HEAT__INHIBIT: "-",
    RAINDETECTOR_HEAT__WORKING: "-",
    RELAIS__STATE__true: "an",
    RELAIS__STATE__false: "aus",
    RELAIS__VALUE: "Befehlswert",
    RELAIS__TRANS: "-",
    RELAIS__ON_TIME: "Einschaltdauer",
    RELAIS__RAMP_TIME: "Dimmzeit",
    RGBW_AUTOMATIC__PROGRAM__0: "aus",
    RGBW_AUTOMATIC__PROGRAM__1: "langsam",
    RGBW_AUTOMATIC__PROGRAM__2: "normal",
    RGBW_AUTOMATIC__PROGRAM__3: "schnell",
    RGBW_AUTOMATIC__PROGRAM__4: "Lagerfeuer",
    RGBW_AUTOMATIC__PROGRAM__5: "Wasserfall",
    RGBW_AUTOMATIC__PROGRAM__6: "TV",
    RGBW_AUTOMATIC__ON_TIME: "Einschaltdauer",
    RGBW_AUTOMATIC__RAMP_TIME: "Dimmzeit",
    RGBW_AUTOMATIC__ACT_MIN_BOARDER: "** RGBW_AUTOMATIC__ACT_MIN_BOARDER",
    RGBW_AUTOMATIC__ACT_MAX_BOARDER: "** RGBW_AUTOMATIC__ACT_MAX_BOARDER",
    RGBW_AUTOMATIC__ACT_BRIGHTNESS: "Aktuelle Helligkeit",
    RGBW_AUTOMATIC__ACT_MIN_BOARDER_STORE: "** RGBW_AUTOMATIC__ACT_MIN_BOARDER_STORE",
    RGBW_AUTOMATIC__ACT_MAX_BOARDER_STORE: "** RGBW_AUTOMATIC__ACT_MAX_BOARDER_STORE",
    RGBW_AUTOMATIC__ON_TIME_STORE: "** RGBW_AUTOMATIC__ON_TIME_STORE",
    RGBW_AUTOMATIC__RAMP_TIME_STORE: "** RGBW_AUTOMATIC__RAMP_TIME_STORE",
    RGBW_AUTOMATIC__ACT_BRIGHTNESS_STORE: "** RGBW_AUTOMATIC__ACT_BRIGHTNESS_STORE",
    RGBW_AUTOMATIC__INHIBIT: "-",
    RGBW_AUTOMATIC__USER_PROGRAM: "-",
    RGBW_COLOR__COLOR: "Farbe",
    RGBW_COLOR__ON_TIME: "Einschaltdauer",
    RGBW_COLOR__RAMP_TIME: "Dimmzeit",
    RGBW_COLOR__ACT_BRIGHTNESS: "Aktuelle Helligkeit",
    RGBW_COLOR__ACT_HSV_COLOR_VALUE: "HSV Farbwert",
    RGBW_COLOR__ON_TIME_STORE: "** RGBW_COLOR__ON_TIME_STORE",
    RGBW_COLOR__RAMP_TIME_STORE: "** RGBW_COLOR__RAMP_TIME_STORE",
    RGBW_COLOR__ACT_BRIGHTNESS_STORE: "** RGBW_COLOR__ACT_BRIGHTNESS_STORE",
    RGBW_COLOR__ACT_HSV_COLOR_VALUE_STORE: "** RGBW_COLOR__ACT_HSV_COLOR_VALUE_STORE",
    RGBW_COLOR__INHIBIT: "-",
    RGBW_COLOR__USER_COLOR: "-",
    ROTARY_HANDLE_SENSOR__STATE__0: "verriegelt",
    ROTARY_HANDLE_SENSOR__STATE__1: "gekippt",
    ROTARY_HANDLE_SENSOR__STATE__2: "offen",
    ROTARY_HANDLE_SENSOR__ERROR__0: "-",
    ROTARY_HANDLE_SENSOR__ERROR__1: "Sabotage ausgelöst",
    ROTARY_HANDLE_SENSOR__LOWBAT__true: "Batteriestand niedrig",
    ROTARY_HANDLE_SENSOR__LOWBAT__false: "-",
    SENSOR__COUNTER: "-",
    SENSOR__SUM: "Gesamtverbrauch",
    SENSOR__SUM_DATE: "Zeitstempel der Initialisierung des SUM-Zählers",
    SENSOR__SUM_DATE_ISO: "-",
    SENSOR__SUM_RESET: "Gesamtverbrauch zurücksetzen",
    SENSOR__CONTROL__0: "unbekannt",
    SENSOR__CONTROL__1: "Wechselstromzähler",
    SENSOR__CONTROL__2: "Wirkleistungsmesser",
    SENSOR__CONTROL__3: "Gaszähler",
    SENSOR__SENSOR__true: "** SENSOR__SENSOR__true",
    SENSOR__SENSOR__false: "** SENSOR__SENSOR__false",
    SENSOR__STATE__true: "an",
    SENSOR__STATE__false: "aus",
    SENSOR__NOTIFICATION: "-",
    SENSOR__MEAN5MINUTES: "Durchschnittsverbrauch (5 Min)",
    SENSOR__MAX5MINUTES: "Maximalverbrauch (5 Min)",
    SENSOR__SUM_1H: "Verbrauch letzte Stunde",
    SENSOR__MAX_1H: "Maximalverbrauch letzte Stunde",
    SENSOR__SUM_24H: "Verbrauch (24 Std)",
    SENSOR__MAX_24H: "Maximalverbrauch (24 Std)",
    SENSOR__METER: "Zählerstand",
    SENSOR__MISS_24H: "-",
    SENSOR__LAST_VALUE: "Durchschnittsverbrauch im letzten Messintervall",
    SENSOR__LAST_TICKS: "Letztes Messintervall in Sekunden mal 10 (GZ)",
    SENSOR__UNITSPTURN: "Umrechnungsfaktor",
    SENSOR__DISTANCE: "Abstand Sensor",
    SENSOR__F_PERCENT: "Füllprozente",
    SENSOR__F_LEVEL: "Füllhöhe",
    SENSOR__F_VOLUME: "Füllmenge",
    SENSOR__RELAIS1__true: "Relais 1 an",
    SENSOR__RELAIS1__false: "Relais 1 aus",
    SENSOR__RELAIS2__true: "Relais 2 an",
    SENSOR__RELAIS2__false: "Relais 2 aus",
    SENSOR__MODE: "** SENSOR__MODE",
    SENSOR__VANE: "** SENSOR__VANE",
    SENSOR__SPEED: "** SENSOR__SPEED",
    SENSOR__ROOM: "** SENSOR__ROOM",
    SENSOR__INFO: "Sensortyp",
    SENSOR__ERROR: "Fehlermeldung",
    SENSOR__ON_TIME: "Einschaltdauer",
    SENSOR_FOR_CARBON_DIOXIDE__STATE__0: "CO<sub>2</sub> Konzentration normal",
    SENSOR_FOR_CARBON_DIOXIDE__STATE__1: "CO<sub>2</sub> Konzentration erhöht",
    SENSOR_FOR_CARBON_DIOXIDE__STATE__2: "CO<sub>2</sub> Konzentration stark erhöht",
    SHUTTER_CONTACT__STATE__true: "offen",
    SHUTTER_CONTACT__STATE__false: "geschlossen",
    SHUTTER_CONTACT__ERROR__0: "-",
    SHUTTER_CONTACT__ERROR__1: "Sabotage ausgelöst",
    SHUTTER_CONTACT__LOWBAT__true: "Batteriestand niedrig",
    SHUTTER_CONTACT__LOWBAT__false: "-",
    SHUTTER_CONTACT__INHIBIT: "-",
    SIGNAL_CHIME__STATE__true: "an",
    SIGNAL_CHIME__STATE__false: "aus",
    SIGNAL_CHIME__ON_TIME: "Einschaltdauer",
    SIGNAL_CHIME__INHIBIT: "-",
    SIGNAL_CHIME__WORKING: "-",
    SIGNAL_LED__STATE__true: "an",
    SIGNAL_LED__STATE__false: "aus",
    SIGNAL_LED__ON_TIME: "Einschaltdauer",
    SIGNAL_LED__INHIBIT: "-",
    SIGNAL_LED__WORKING: "-",
    SMOKE_DETECTOR__STATE__true: "Rauch registriert",
    SMOKE_DETECTOR__STATE__false: "OK",
    SMOKE_DETECTOR__ERROR_ALARM_TEST__0: "-",
    SMOKE_DETECTOR__ERROR_ALARM_TEST__1: "Alarmtest fehlgeschlagen",
    SMOKE_DETECTOR__ERROR_SMOKE_CHAMBER__0: "-",
    SMOKE_DETECTOR__ERROR_SMOKE_CHAMBER__1: "degradierten Rauchkammer",
    SMOKE_DETECTOR__LOWBAT__true: "Batteriestand niedrig",
    SMOKE_DETECTOR__LOWBAT__false: "-",
    SMOKE_DETECTOR_TEAM__STATE__true: "Rauch registriert",
    SMOKE_DETECTOR_TEAM__STATE__false: "OK",
    STATUS_INDICATOR__STATE__true: "an",
    STATUS_INDICATOR__STATE__false: "aus",
    STATUS_INDICATOR__ON_TIME: "Einschaltdauer",
    STATUS_INDICATOR__INHIBIT: "-",
    STATUS_INDICATOR__WORKING: "-",
    SYSTEM__TIMER_STOP: "Timer abbrechen",
    SYSTEM__TIMER_SET: "Timer setzen",
    SYSTEM__TIMER_EVENT: "-",
    SYSTEM__STATE__true: "an",
    SYSTEM__STATE__false: "aus",
    SYSTEM__TIMER_GET: "verbleibende Zeit",
    SYSTEM__CMD_RET: "-",
    SYSTEM__WORKING: "-",
    SYSTEM__LEVEL: "** SYSTEM__LEVEL",
    SYSTEM__OLD_LEVEL: "** SYSTEM__OLD_LEVEL",
    SYSTEM__STOP: "** SYSTEM__STOP",
    SYSTEM__CMD_RUNS: "kurzer Tastendruck",
    SYSTEM__CMD_RUNL: "langer Tastendruck",
    SYSTEM__CMD_SETS: "-",
    SYSTEM__CMD_SETL: "-",
    SYSTEM__CMD_RETS: "-",
    SYSTEM__CMD_RETL: "-",
    SYSTEM__CMD_QUERY_RET: "-",
    SYSTEM__CMD_EXEC: "-",
    SYSTEM__CMD_KILL: "-",
    SYSTEM__LOGIT: "-",
    SYSTEM__SYSLOG: "-",
    SYSTEM__SET_STATE: "** SYSTEM__SET_STATE",
    SYSTEM__RAND: "** SYSTEM__RAND",
    SYSTEM__HOLD: "** SYSTEM__HOLD",
    SYSTEM__CONTROL: "** SYSTEM__CONTROL",
    SYSTEM__SEND: "Tastendruck auf WebUI",
    SYSTEM__MAILTO: "Email-Empfänger",
    SYSTEM__MAILCC: "Email-CC",
    SYSTEM__SUBJECT: "Email-Betreff",
    SYSTEM__TYPE__0: "Text",
    SYSTEM__TYPE__1: "HTML",
    SYSTEM__TYPE__2: "Alarm",
    SYSTEM__TEXT: "Text",
    SYSTEM__TEMPLATEID: "Template ID",
    SYSTEM__OPTION_1: "Daten fär vordefiniertes Template 1",
    SYSTEM__OPTION_2: "Daten fär vordefiniertes Template 2",
    SYSTEM__OPTION_3: "Daten fär vordefiniertes Template 3",
    SYSTEM__OPTION_4: "Daten fär vordefiniertes Template 4",
    SYSTEM__OPTION_5: "Daten fär vordefiniertes Template 5",
    SYSTEM__RETURN: "Rückgabewert nach Funktionsaufruf",
    SYSTEM__PHONE: "SMS-Telefonnummer",
    SYSTEM__PRIORITY__0: "Priorität niedrig",
    SYSTEM__PRIORITY__1: "Priorität normal",
    SYSTEM__PRIORITY__2: "Priorität wichtig",
    SYSTEM__PRIORITY__3: "Priorität hoch",
    SYSTEM__PRIORITY__4: "Priorität kritisch",
    SYSTEM__APIKEY: "-",
    SWITCH__INFO: "eingetragene Adresse",
    SWITCH__IP: "Adresse nach DNS-Auflösung",
    SWITCH__UNREACH_CTR: "Fehlversuche",
    SWITCH__STATE__true: "an",
    SWITCH__STATE__false: "aus",
    SWITCH__ON_TIME: "Einschaltdauer",
    SWITCH__INHIBIT: "-",
    SWITCH__WORKING: "-",
    SWITCH__TOGGLE: "Zustand wechseln",
    SWITCH__PROG_TIMER: "-",
    SWITCH__SWITCH_1H: "Einschaltvorgänge (1 Std)",
    SWITCH__TIME_ON_1H: "Gesamtdauer (an) (1 Std)",
    SWITCH__TIME_OFF_1H: "Gesamtdauer (aus) (1 Std)",
    SWITCH__TIME_ON: "Letzte Dauer (an)",
    SWITCH__TIME_OFF: "Letzte Dauer (aus)",
    SWITCH__TIME_ON_SUM: "Gesamtdauer (an)",
    SWITCH__SWITCH_SUM: "Anzahl der Einschaltvorgänge",
    SWITCH__TIME_ON_EVENT: "-",
    SWITCH__TIME_OFF_EVENT: "-",
    SWITCH__TIME_STATE__true: "an",
    SWITCH__TIME_STATE__false: "aus",
    SWITCH__INFO_LED__0: "aus",
    SWITCH__INFO_LED__1: "grün",
    SWITCH__INFO_LED__2: "orange",
    SWITCH__INFO_LED__3: "rot",
    SWITCH__SUM_RESET: "Zählstand zurücksetzen",
    SWITCH__SET_STATE: "Eingabewert",
    SWITCH__NIGHT_MODE: "Nachtmodus",
    SWITCH__NIGHT_MODE__true: "Nachtmodus",
    SWITCH__NIGHT_MODE__false: "-",
    SWITCH__POWER: "Aktuelle Leistung",
    SWITCH__ERROR_OVERLOAD__true: "Überlastung",
    SWITCH__ERROR_OVERLOAD__false: "-",
    SWITCH__ENERGY_COUNTER: "Aktueller Energieverbrauch",
    SWITCH__RCVS: "** SWITCH__RCVS",
    SWITCH__RCVL: "** SWITCH__RCVL",
    SWITCH__SEND_CMD: "** SWITCH__SEND_CMD",
    SWITCH_INTERFACE__PRESS: "** SWITCH_INTERFACE__PRESS",
    SWITCH_TRANSMIT__DECISION_VALUE: "** SWITCH_TRANSMIT__DECISION_VALUE",
    THERMALCONTROL_TRANSMIT__LOWBAT_REPORTING__true: "Batteriestand niedrig",
    THERMALCONTROL_TRANSMIT__LOWBAT_REPORTING__false: "-",
    THERMALCONTROL_TRANSMIT__COMMUNICATION_REPORTING__true: "Kommunikations-Fehler",
    THERMALCONTROL_TRANSMIT__COMMUNICATION_REPORTING__false: "-",
    THERMALCONTROL_TRANSMIT__WINDOW_OPEN_REPORTING__true: "Fenster offen",
    THERMALCONTROL_TRANSMIT__WINDOW_OPEN_REPORTING__false: "-",
    THERMALCONTROL_TRANSMIT__BATTERY_STATE: "** THERMALCONTROL_TRANSMIT__BATTERY_STATE",
    THERMALCONTROL_TRANSMIT__ACTUAL_TEMPERATURE: "Temperatur",
    THERMALCONTROL_TRANSMIT__ACTUAL_HUMIDITY: "Aktuelle Luftfeuchtigkeit",
    THERMALCONTROL_TRANSMIT__BOOST_MODE: "Boost",
    THERMALCONTROL_TRANSMIT__LOWERING_MODE: "Absenken",
    THERMALCONTROL_TRANSMIT__MANU_MODE: "Manuell",
    THERMALCONTROL_TRANSMIT__COMFORT_MODE: "Komfort",
    THERMALCONTROL_TRANSMIT__AUTO_MODE: "Automatisch",
    THERMALCONTROL_TRANSMIT__CONTROL_MODE: "-",
    THERMALCONTROL_TRANSMIT__BOOST_STATE: "-",
    THERMALCONTROL_TRANSMIT__PARTY_MODE_SUBMIT: "-",
    THERMALCONTROL_TRANSMIT__PARTY_TEMPERATURE: "Einstelltemperatur",
    THERMALCONTROL_TRANSMIT__PARTY_START: "Startzeit",
    THERMALCONTROL_TRANSMIT__PARTY_START_TIME: "-",
    THERMALCONTROL_TRANSMIT__PARTY_START_DAY: "-",
    THERMALCONTROL_TRANSMIT__PARTY_START_MONTH: "-",
    THERMALCONTROL_TRANSMIT__PARTY_START_YEAR: "-",
    THERMALCONTROL_TRANSMIT__PARTY_STOP: "Endzeit",
    THERMALCONTROL_TRANSMIT__PARTY_STOP_TIME: "-",
    THERMALCONTROL_TRANSMIT__PARTY_STOP_DAY: "-",
    THERMALCONTROL_TRANSMIT__PARTY_STOP_MONTH: "-",
    THERMALCONTROL_TRANSMIT__PARTY_STOP_YEAR: "-",
    TILT_SENSOR__STATE__true: "Neigung registriert",
    TILT_SENSOR__STATE__false: "OK",
    TILT_SENSOR__LOWBAT__true: "Batteriestand niedrig",
    TILT_SENSOR__LOWBAT__false: "-",
    VIRTUAL_DIMMER__OLD_LEVEL: "Letzten Dimmwert wiederherstellen",
    VIRTUAL_DIMMER__RAMP_TIME: "Dimmzeit",
    VIRTUAL_DIMMER__ON_TIME: "Einschaltdauer",
    VIRTUAL_DIMMER__RAMP_STOP: "Dimmzeit anhalten",
    VIRTUAL_DIMMER__INHIBIT: "-",
    VIRTUAL_DIMMER__WORKING: "-",
    VIRTUAL_DIMMER__DIRECTION: "-",
    VIRTUAL_DIMMER__ERROR__0: "-",
    VIRTUAL_DIMMER__ERROR__1: "Ladefehler",
    VIRTUAL_DIMMER__ERROR_REDUCED__false: "-",
    VIRTUAL_DIMMER__ERROR_REDUCED__true: "Reduzierte Leistung",
    VIRTUAL_DIMMER__ERROR_OVERHEAT__false: "-",
    VIRTUAL_DIMMER__ERROR_OVERHEAT__true: "Überhitzung",
    VIRTUAL_DIMMER__ERROR_OVERLOAD__false: "-",
    VIRTUAL_DIMMER__ERROR_OVERLOAD__true: "Überlastung",
    VIRTUAL_DIMMER__LEVEL_REAL: "Realwert",
    VIRTUAL_KEY__PRESS_SHORT: "Kurzer Tastendruck",
    VIRTUAL_KEY__PRESS_LONG: "Langer Tastendruck",
    WATERDETECTIONSENSOR__STATE__0: "Trocken",
    WATERDETECTIONSENSOR__STATE__1: "Feucht",
    WATERDETECTIONSENSOR__STATE__2: "Nass",
    WATERDETECTIONSENSOR__LOWBAT__true: "Batteriestand niedrig",
    WATERDETECTIONSENSOR__LOWBAT__false: "-",
    WEATHER__HUMIDITY: "Luftfeuchtigkeit",
    WEATHER__HUMIDITYF: "-",
    WEATHER__TEMPERATURE: "Temperatur",
    WEATHER__WIND_SPEED: "Windgeschwindigkeit",
    WEATHER__WIND_DIRECTION: "Windrichtung",
    WEATHER__WIND_DIRECTION_RANGE: "Windrichtungsbereich",
    WEATHER__SUNSHINEDURATION: "Sonnenscheindauer",
    WEATHER__RAINING__true: "Regen",
    WEATHER__RAINING__false: "-",
    WEATHER__RAIN_COUNTER: "Regenmenge",
    WEATHER__RAIN_CTR: "Regenmenge",
    WEATHER__DEW_POINT: "Taupunkt",
    WEATHER__ABS_HUMIDITY: "Absolute Luftfeuchtigkeit",
    WEATHER__TEMP_MIN_24H: "Min. Temperatur (24 Std)",
    WEATHER__TEMP_MAX_24H: "Max. Temperatur (24 Std)",
    WEATHER__HUM_MIN_24H: "Min. Luftfeuchtigkeit (24 Std)",
    WEATHER__HUM_MAX_24H: "Max. Luftfeuchtigkeit (24 Std)",
    WEATHER__WIND_MAX_24H: "Max. Windgeschwindigkeit (24 Std)",
    WEATHER__RAIN_CTR_24H: "Regenmenge (24 Std)",
    WEATHER__MISS_24H: "-",
    WEATHER__BRIGHTNESS: "Helligkeit",
    WEATHER__LOWBAT__true: "Batteriestand niedrig",
    WEATHER__LOWBAT__false: "-",
    WEATHER__AIR_PRESSURE: "Luftdruck",
    WEATHER__SET_HUMIDITY: "Luftfeuchtigkeit setzen",
    WEATHER__MEDIAN: "Zentralwert",
    WEATHER__MEAN: "Durchschnitt",
    WEATHER__BRIGHTNESS_WEST: "Helligkeitswert Westen",
    WEATHER__BRIGHTNESS_SOUTH: "Helligkeitswert Süden",
    WEATHER__BRIGHTNESS_EAST: "Helligkeitswert Osten",
    WEATHER_TRANSMIT__HUMIDITY: "Luftfeuchtigkeit",
    WEATHER_TRANSMIT__TEMPERATURE: "Temperatur",
    WEBCAM__INFO: "Info-Text",
    WEBCAM__IMAGE: "Bild",
    WEBCAM__PTZ_CMD: "Vordefinierte Funktion",
    WEBCAM__IR__0: "Infrarot-LED aus",
    WEBCAM__IR__1: "Infrarot-LED auto",
    WEBCAM__IR__2: "Infrarot-LED an",
    WINMATIC__SPEED: "Geschwindigkeit",
    WINMATIC__STOP: "Stop",
    WINMATIC__RELOCK_DELAY: "Automatisch verriegeln nach Zeit",
    WINMATIC__STATE_UNCERTAIN__true: "Zustand unsicher",
    WINMATIC__STATE_UNCERTAIN__false: "-",
    WINMATIC__DIRECTION: "-",
    WINMATIC__INHIBIT: "-",
    WINMATIC__WORKING: "-",
    WINMATIC__ERROR__0: "-",
    WINMATIC__ERROR__1: "Fehler Drehantrieb",
    WINMATIC__ERROR__2: "Fehler Kippantrieb",
    WRAPPER__MEDIAN: "Zentralwert",
    WRAPPER__MEAN: "Durchschnitt",
    WRAPPER__SET_STATE: "Eingabewert",
    WRAPPER__TIME_ON_1H: "Gesamtdauer (an) (1 Std)",
    WRAPPER__TIME_OFF_1H: "Gesamtdauer (aus) (1 Std)",
    WRAPPER__SWITCH_1H: "Einschaltvorgänge (1 Std)",
    WRAPPER__TIME_ON_24H: "Gesamtdauer (an) (24 Std)",
    WRAPPER__TIME_OFF_24H: "Gesamtdauer (aus) (24 Std)",
    WRAPPER__SWITCH_24H: "Einschaltvorgänge (24 Std)",
    WRAPPER__PERCENT_ON_24H: "Prozentsatz (an) (24 Std)",
    WRAPPER__TIME_ON_168H: "Gesamtdauer (an) (7 Tage)",
    WRAPPER__TIME_OFF_168H: "Gesamtdauer (aus) (7 Tage)",
    WRAPPER__SWITCH_168H: "Einschaltvorgänge (7 Tage)",
    WRAPPER__PERCENT_ON_168H: "Prozentsatz (an) (7 Tage)",
    WRAPPER__TIME_ON_HHH: "Gesamtdauer (an)",
    WRAPPER__TIME_OFF_HHH: "Gesamtdauer (aus)",
    WRAPPER__SWITCH_HHH: "Einschaltvorgänge",
    WRAPPER__PERCENT_ON_HHH: "Prozentsatz",
    WRAPPER__STATE__true: "an",
    WRAPPER__STATE__false: "aus",
    WRAPPER__TIME_ON: "Letzte Dauer (an)",
    WRAPPER__TIME_OFF: "Letzte Dauer (aus)",
    WRAPPER__TIME_ON_EVENT: "-",
    WRAPPER__TIME_OFF_EVENT: "-",
    WRAPPER__LIGHT: "** WRAPPER__LIGHT",
    //Servicemeldungen
    ALARMDP__CONFIG_PENDING: "Konfigurationsdaten stehen zur Übertragung an",
    ALARMDP__DEVICE_IN_BOOTLOADER: "Gerät startet neu",
    ALARMDP__LOWBAT: "Batteriestand niedrig",
    ALARMDP__STICKY_UNREACH: "Kommunikation war gestört",
    ALARMDP__U_SOURCE_FAIL: "Netzteil ausgefallen",
    ALARMDP__UNREACH: "Kommunikation zur Zeit gestört",
    ALARMDP__UPDATE_PENDING: "Update verfügbar",
    ALARMDP__USBH_POWERFAIL: "USB-Host deaktiviert",
    //Andere Bezeichnungen
    OPEN: "offen",
    OPEN_SHORT: "auf",
    CLOSE: "geschlossen",
    CLOSE_SHORT: "zu",
    LOCKED: "Verriegelt",
    LOCK: "Verriegeln",
    ON: "an",
    OFF: "aus",
    MAX: "Maximum",
    MED: "Medium",
    MIN: "Minimum",
    RUN: "Ausführen",
    SAVE: "Speichern",
    YES: "Ja",
    NO: "Nein",
    VISIBILITY: "Visibilität",
    DELETE: "Löschen",
    UPLOAD: "Datei hochladen",
    SYS_VAR: "Systemvariablen",
    PROGRAMS: "Programme",
    FAVORITES: "Favoriten",
    ROOMS: "Räume",
    FUNCTIONS: "Gewerke",
    EDIT: "Bearbeiten",
    OPTIONS: "Optionen",
    TEST_DEVICE: "Testseite HM",
    TEST_CUXD: "Testseite CUXD",
    UNKNOWN_ERROR: "Unbekannter Fehler",
    NO_SERVICE_MESSAGES: "Keine Servicemeldungen vorhanden.",
    UNKNOWN_VAR_TYPE: "Unbekannter Variablentyp",
    SETTINGS: "Einstellungen",
    TIME_SEC_SINGULAR: "Sekunde",
    TIME_SEC_PLURAL: "Sekunden",
    TIME_MIN_SINGULAR: "Minute",
    TIME_MIN_PLURAL: "Minuten",
    TIME_H_SINGULAR: "Stunde",
    TIME_H_PLURAL: "Stunden",
    TIME_DAY_SINGULAR: "Tag",
    TIME_DAY_PLURAL: "Tagen",
    TIME_MON_SINGULAR: "Monat",
    TIME_MON_PLURAL: "Monate",
    TIME_Y_SINGULAR: "Jahr",
    TIME_Y_PLURAL: "Jahre",
    TIME_PREFIX: "Vor",
    TIME_SUFFIX: " ",
    LOADING: "Lade",
    SET: "Setzen",
    DEFAULT: "Standard",
    BLACK: "Schwarz",
    PINK: "Rosa",
    GREEN: "Grün",
    YELLOW: "Gelb",
    GREY: "Grau",
    BLUE: "Blau",
    RED: "Rot",
    BROWN: "Braun",
    WHITE: "Weiß",
    BRAZIL: "Brasilien",
    GERMANY: "Deutschland",
    SHOW: "Anzeigen",
    HIDE: "Verstecken",
    SHOW_TEST: "Testseiten anzeigen",
    SMALL: "Klein",
    BIG: "Groß",
    GRAPHICS_SIZE: "Größe der Grafiken",
    FILTER: "Daten filtern...",
    TRANSFER: "Übertrage...",
    DELAY: "Wert wird noch an Gerät übertragen und erst verzögert hier dargestellt.",
    TRANSFER_OK: "OK!",
    IMAGE_UPLOAD: "Es können nur JPG, GIF oder PNG hochgeladen werden!",
    START: "Starte...",
    NEW_VERSION: "Neue WebMatic Version",
    DOWNLOAD: "runterladen",
    MANUAL: "nur manuelle Ausführung",
    OPERATABLE: "bedienbar"
};