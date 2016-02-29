// DEVICETYP__CHANNELTYP__EVENTUELLERSTATUS
var textMap = {
    //GERÄTE
    AKKU__LEVEL: "充电状态",
    AKKU__STATUS__0: "涓流充电",
    AKKU__STATUS__1: "电池装载",
    AKKU__STATUS__2: "电池供电",
    AKKU__STATUS__3: "电池状态未知",
    ALARMACTUATOR__STATE__TRUE: "报警",
    ALARMACTUATOR__STATE__FALSE: "行",
    ALARMACTUATOR__ERROR_POWER__1: "电源电压不正确",
    ALARMACTUATOR__ERROR_POWER__0: "-",
    ALARMACTUATOR__ERROR_SABOTAGE__1: "破坏的消息",
    ALARMACTUATOR__ERROR_SABOTAGE__0: "-",
    ALARMACTUATOR__ERROR_BATTERY__1: "有缺陷的电池",
    ALARMACTUATOR__ERROR_BATTERY__0: "-",
    ALARMACTUATOR__ON_TIME: "开机时间",
    ALARMACTUATOR__INHIBIT: "-",
    ALARMACTUATOR__WORKING: "-",
    ALARMACTUATOR__LOWBAT__TRUE: "电池电量低",
    ALARMACTUATOR__LOWBAT__FALSE: "-",
    BLIND__STOP: "停止",
    BLIND__INHIBIT: "-",
    BLIND__WORKING: "-",
    BLIND__DIRECTION: "-",
    BLIND__RAMP_TIME: "** BLIND__RAMP_TIME",
    BLIND__ON_TIME: "时间盲目的",
    CAPACITIVE_FILLING_LEVEL_SENSOR__FILLING_LEVEL: "填充水平",
    CAPACITIVE_FILLING_LEVEL_SENSOR__FREQ: "频率传感器",
    CLIMATECONTROL_REGULATOR__ADJUSTING_COMMAND: "-",
    CLIMATECONTROL_REGULATOR__ADJUSTING_DATA: "-",
    CLIMATECONTROL_REGULATOR__STATE__TRUE: "上",
    CLIMATECONTROL_REGULATOR__STATE__FALSE: "关",
    CLIMATECONTROL_REGULATOR__LEVEL: "** CLIMATECONTROL_REGULATOR__LEVEL",
    CLIMATECONTROL_REGULATOR__PRESENCE: "** CLIMATECONTROL_REGULATOR__PRESENCE",
    CLIMATECONTROL_REGULATOR__INHIBIT: "-",
    CLIMATECONTROL_REGULATOR__PARTY: "** CLIMATECONTROL_REGULATOR__PARTY",
    CLIMATECONTROL_REGULATOR__MODE__0: "自动",
    CLIMATECONTROL_REGULATOR__MODE__1: "舒适",
    CLIMATECONTROL_REGULATOR__MODE__2: "生态",
    CLIMATECONTROL_REGULATOR__MODE__3: "关",
    CLIMATECONTROL_REGULATOR__VACATION__0: "关",
    CLIMATECONTROL_REGULATOR__VACATION__1: "计划",
    CLIMATECONTROL_REGULATOR__VACATION__2: "活跃",
    CLIMATECONTROL_REGULATOR__INFO: "** CLIMATECONTROL_REGULATOR__INFO",
    CLIMATECONTROL_REGULATOR__SET_INVERT__TRUE: "反相控制",
    CLIMATECONTROL_REGULATOR__SET_INVERT__FALSE: "-",
    CLIMATECONTROL_REGULATOR__VALUE: "开关状态",
    CLIMATECONTROL_REGULATOR__SETPOINT_DIFF: "从控制面板接收到的操纵值",
    CLIMATECONTROL_REGULATOR__SETPOINT_DIFF_C: "转换设定值差",
    CLIMATECONTROL_REGULATOR__SPEED__0: "** CLIMATECONTROL_REGULATOR__SPEED__0",
    CLIMATECONTROL_REGULATOR__SPEED__1: "** CLIMATECONTROL_REGULATOR__SPEED__1",
    CLIMATECONTROL_REGULATOR__SPEED__2: "** CLIMATECONTROL_REGULATOR__SPEED__2",
    CLIMATECONTROL_REGULATOR__SPEED__3: "** CLIMATECONTROL_REGULATOR__SPEED__3",
    CLIMATECONTROL_REGULATOR__SPEED__4: "** CLIMATECONTROL_REGULATOR__SPEED__4",
    CLIMATECONTROL_REGULATOR__VALVE_STATE: "阀门开集",
    CLIMATECONTROL_REGULATOR__SUMMER_MODE__TRUE: "夏季模式",
    CLIMATECONTROL_REGULATOR__SUMMER_MODE__FALSE: "夏季模式关",
    CLIMATECONTROL_REGULATOR__PARTY_MODE_SUBMIT: "** CLIMATECONTROL_REGULATOR__PARTY_MODE_SUBMIT",
    CLIMATECONTROL_REGULATOR__VACATION_STOP: "** CLIMATECONTROL_REGULATOR__VACATION_STOP",
    CLIMATECONTROL_REGULATOR__SETPOINT__VENT_CLOSED: "阀门关闭",
    CLIMATECONTROL_REGULATOR__SETPOINT__VENT_OPEN: "阀门打开",
    CLIMATECONTROL_REGULATOR__SET_INVERT: "** CLIMATECONTROL_REGULATOR__SET_INVERT",
    CLIMATECONTROL_REGULATOR__MODE_TEMPERATUR_REGULATOR__0: "自动",
    CLIMATECONTROL_REGULATOR__MODE_TEMPERATUR_REGULATOR__1: "手动",
    CLIMATECONTROL_REGULATOR__MODE_TEMPERATUR_REGULATOR__2: "党",
    CLIMATECONTROL_REGULATOR__TEMPERATUR_COMFORT_VALUE: "舒适温度",
    CLIMATECONTROL_REGULATOR__TEMPERATUR_LOWERING_VALUE: "挫折",
    CLIMATECONTROL_REGULATOR__TEMPERATUR_WINDOW_OPEN_VALUE: "窗口打开温度",
    CLIMATECONTROL_REGULATOR__PARTY_END_TIME: "党/短期结局",
    CLIMATECONTROL_RT_TRANSCEIVER__ACTUAL_TEMPERATURE: "温度",
    CLIMATECONTROL_RT_TRANSCEIVER__ACTUAL_HUMIDITY: "当前湿度",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__0: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__1: "阀门执行机构行动迟缓",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__2: "调整范围过大",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__3: "调整范围太小",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__4: "连接错误",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__6: "电池电量低",
    CLIMATECONTROL_RT_TRANSCEIVER__FAULT_REPORTING__7: "阀门位置错误",
    CLIMATECONTROL_RT_TRANSCEIVER__VALVE_STATE: "阀门开度",
    CLIMATECONTROL_RT_TRANSCEIVER__BOOST_MODE: "升压模式",
    CLIMATECONTROL_RT_TRANSCEIVER__LOWERING_MODE: "降",
    CLIMATECONTROL_RT_TRANSCEIVER__MANU_MODE: "手动",
    CLIMATECONTROL_RT_TRANSCEIVER__COMFORT_MODE: "舒适",
    CLIMATECONTROL_RT_TRANSCEIVER__AUTO_MODE: "自动",
    CLIMATECONTROL_RT_TRANSCEIVER__CONTROL_MODE__0: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__CONTROL_MODE__1: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__CONTROL_MODE__2: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__CONTROL_MODE__3: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__BOOST_STATE: "促进持续时间",
    CLIMATECONTROL_RT_TRANSCEIVER__BATTERY_STATE: "电池状态",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_MODE: "假日模式开始",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_MODE_SUBMIT: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_TEMPERATURE: "设定温度",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_START: "开始时间",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_START_TIME: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_START_DAY: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_START_MONTH: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_START_YEAR: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_STOP: "结束时间",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_STOP_TIME: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_STOP_DAY: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_STOP_MONTH: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__PARTY_STOP_YEAR: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__CLEAR_WINDOW_OPEN_SYMBOL: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__SET_SYMBOL_FOR_HEATING_PHASE: "-",
    CLIMATECONTROL_RT_TRANSCEIVER__WINDOW_STATE__FALSE: "关闭",
    CLIMATECONTROL_RT_TRANSCEIVER__WINDOW_STATE__TRUE: "开放",
    CLIMATECONTROL_VENT_DRIVE__VALVE_STATE: "阀门开度",
    CLIMATECONTROL_VENT_DRIVE__ERROR__0: "-",
    CLIMATECONTROL_VENT_DRIVE__ERROR__1: "阀门驱动封杀",
    CLIMATECONTROL_VENT_DRIVE__ERROR__2: "阀门驱动松散",
    CLIMATECONTROL_VENT_DRIVE__ERROR__3: "设置范围太小",
    CLIMATECONTROL_VENT_DRIVE__ERROR__4: "电池电量低",
    CLIMATECONTROL_VENT_DRIVE__VALVE_OFFSET_VALUE: "阀门驱动器位置偏移",
    CLIMATECONTROL_VENT_DRIVE__TEMPERATURE: "温度",
    CLIMATECONTROL_VENT_DRIVE__ALARM__TRUE: "阀门驱动封杀",
    CLIMATECONTROL_VENT_DRIVE__ALARM__FALSE: "-",
    CONDITION_POWER__DECISION_VALUE: "** CONDITION_POWER__DECISION_VALUE",
    CONDITION_CURRENT__DECISION_VALUE: "** CONDITION_CURRENT__DECISION_VALUE",
    CONDITION_VOLTAGE__DECISION_VALUE: "** CONDITION_VOLTAGE__DECISION_VALUE",
    CONDITION_FREQUENCY__DECISION_VALUE: "** CONDITION_FREQUENCY__DECISION_VALUE",
    DIGITAL_ANALOG_INPUT__VALUE: "** DIGITAL_ANALOG_INPUT__VALUE",
    DIGITAL_ANALOG_OUTPUT__FREQUENCY: "** DIGITAL_ANALOG_OUTPUT__FREQUENCY",
    DIGITAL_ANALOG_OUTPUT__STATE__TRUE: "上",
    DIGITAL_ANALOG_OUTPUT__STATE__FALSE: "关",
    DIGITAL_INPUT__FREQUENCY: "** DIGITAL_INPUT__FREQUENCY",
    DIGITAL_INPUT__STATE__TRUE: "是的",
    DIGITAL_INPUT__STATE__FALSE: "不",
    DIGITAL_OUTPUT__STATE__TRUE: "上",
    DIGITAL_OUTPUT__STATE__FALSE: "关",
    DIMMER__PROG_TIMER: "-",
    DIMMER__TOGGLE: "改变状态",
    DIMMER__PROG_DIM_UP: "-",
    DIMMER__PROG_DIM_DOWN: "-",
    DIMMER__OLD_LEVEL: "恢复上次调光",
    DIMMER__RAMP_TIME: "调光",
    DIMMER__ON_TIME: "责任",
    DIMMER__RAMP_STOP: "调光停止",
    DIMMER__INHIBIT: "-",
    DIMMER__WORKING: "-",
    DIMMER__DIRECTION: "-",
    DIMMER__POWER: "电流输出",
    DIMMER__ENERGY_COUNTER: "目前的能源消费",
    DIMMER__ERROR__0: "-",
    DIMMER__ERROR__1: "充电错误",
    DIMMER__ERROR_REDUCED__FALSE: "-",
    DIMMER__ERROR_REDUCED__TRUE: "低功耗",
    DIMMER__ERROR_OVERHEAT__FALSE: "-",
    DIMMER__ERROR_OVERHEAT__TRUE: "过热",
    DIMMER__ERROR_OVERLOAD__FALSE: "-",
    DIMMER__ERROR_OVERLOAD__TRUE: "超载",
    DIMMER__LEVEL_REAL: "真正的价值",
    DISPLAY__TEXT: "显示器",
    DISPLAY__BULB: "灯泡",
    DISPLAY__SWITCH: "开关",
    DISPLAY__WINDOW: "窗口",
    DISPLAY__DOOR: "门",
    DISPLAY__BLIND: "盲目",
    DISPLAY__SCENE: "场景",
    DISPLAY__PHONE: "手机",
    DISPLAY__BELL: "钟",
    DISPLAY__CLOCK: "时钟",
    DISPLAY__ARROW_UP: "箭头向上",
    DISPLAY__ARROW_DOWN: "向下箭头",
    DISPLAY__UNIT__0: "-",
    DISPLAY__UNIT__1: "%",
    DISPLAY__UNIT__2: "W",
    DISPLAY__UNIT__3: "°C",
    DISPLAY__UNIT__4: "°F",
    DISPLAY__BEEP__0: "-",
    DISPLAY__BEEP__1: "声音1",
    DISPLAY__BEEP__2: "声音2",
    DISPLAY__BEEP__3: "声音3",
    DISPLAY__BACKLIGHT__0: "背光关闭",
    DISPLAY__BACKLIGHT__1: "背光",
    DISPLAY__BACKLIGHT__2: "背光缓慢闪烁",
    DISPLAY__BACKLIGHT__3: "背光灯快速闪烁",
    DISPLAY__SUBMIT: "** DISPLAY__SUBMIT",
    DISPLAY__ALARM_COUNT: "** DISPLAY__ALARM_COUNT",
    DISPLAY__SERVICE_COUNT: "** DISPLAY__SERVICE_COUNT",
    INPUT_OUTPUT__PRESS_SHORT: "短按",
    INPUT_OUTPUT__PRESS_LONG: "长按",
    KEY__ALL_LEDS: "-",
    KEY__LED_STATUS__0: "国家关",
    KEY__LED_STATUS__1: "国家红",
    KEY__LED_STATUS__2: "国家绿色",
    KEY__LED_STATUS__3: "状态橙",
    KEY__LED_SLEEP_MODE: "** KEY__LED_SLEEP_MODE",
    KEY__PRESS_SHORT: "短按",
    KEY__PRESS_LONG: "长按",
    KEY__SUBMIT: "** KEY__SUBMIT",
    KEY__KEYPRESS_TIME: "** KEY__KEYPRESS_TIME",
    KEY__INHIBIT: "-",
    KEY__SEND: "快照",
    KEY__RESET: "重新启动",
    KEY__WORKING: "-",
    KEY__CMD_SETS: "-",
    KEY__CMD_SETL: "-",
    KEY__CMD_RETS: "-",
    KEY__CMD_RETL: "-",
    KEY__CMD_QUERY_RET: "-",
    KEY__CMD_EXEC: "-",
    KEY__CMD_KILL: "-",
    KEYMATIC__STATE__TRUE: "开放",
    KEYMATIC__STATE__FALSE: "关闭",
    KEYMATIC__OPEN: "打开",
    KEYMATIC__RELOCK_DELAY: "-",
    KEYMATIC__STATE_UNCERTAIN__TRUE: "不确定状态",
    KEYMATIC__STATE_UNCERTAIN__FALSE: "-",
    KEYMATIC__DIRECTION: "-",
    KEYMATIC__INHIBIT: "-",
    KEYMATIC__ERROR__0: "-",
    KEYMATIC__ERROR__1: "连接错误",
    KEYMATIC__ERROR__2: "电机停转",
    MOTION_DETECTOR__BRIGHTNESS: "亮度",
    MOTION_DETECTOR__SET_BRIGHTNESS: "亮度设置",
    MOTION_DETECTOR__NEXT_TRANSMISSION: "下一个传输",
    MOTION_DETECTOR__MOTION__TRUE: "运动检测",
    MOTION_DETECTOR__MOTION__FALSE: "没有运动检测",
    MOTION_DETECTOR__SET_MOTION: "设置的议案",
    MOTION_DETECTOR__ERROR__0: "-",
    MOTION_DETECTOR__ERROR__1: "破坏引发的",
    POWER__LOWBAT: "电池电量低",
    POWER__BAT_VOLTAGE: "电池电压",
    POWERMETER__BOOT__TRUE: "** POWERMETER__BOOT__TRUE",
    POWERMETER__BOOT__FALSE: "** POWERMETER__BOOT__FALSE",
    POWERMETER__ENERGY_COUNTER: "目前的能源消费",
    POWERMETER__POWER: "电流输出",
    POWERMETER__CURRENT: "安培",
    POWERMETER__VOLTAGE: "电压的开关量输出",
    POWERMETER__FREQUENCY: "频率",
    POWERMETER__SUM_1H: "能源消耗的最后一小时",
    POWERMETER__SUM_24H: "过去24小时的能量消耗",
    POWERMETER_IGL__BOOT: "** POWERMETER_IGL__BOOT",
    POWERMETER_IGL__GAS_ENERGY_COUNTER: "气体能源柜台",
    POWERMETER_IGL__GAS_POWER: "目前的天然气输出",
    POWERMETER_IGL__ENERGY_COUNTER: "节能计数器",
    POWERMETER_IGL__POWER: "电流输出",
    PULSE_SENSOR__SEQUENCE_OK: "序接受",
    RAINDETECTOR__STATE__0: "干",
    RAINDETECTOR__STATE__1: "雨",
    RAINDETECTOR_HEAT__STATE__TRUE: "上加热",
    RAINDETECTOR_HEAT__STATE__FALSE: "加热关",
    RAINDETECTOR_HEAT__ON_TIME: "占空比(加热)",
    RAINDETECTOR_HEAT__INHIBIT: "-",
    RAINDETECTOR_HEAT__WORKING: "-",
    RELAIS__STATE__TRUE: "上",
    RELAIS__STATE__FALSE: "关",
    RELAIS__VALUE: "指令值",
    RELAIS__TRANS: "-",
    RELAIS__ON_TIME: "责任",
    RELAIS__RAMP_TIME: "调光",
    RGBW_AUTOMATIC__PROGRAM__0: "关",
    RGBW_AUTOMATIC__PROGRAM__1: "慢",
    RGBW_AUTOMATIC__PROGRAM__2: "正常",
    RGBW_AUTOMATIC__PROGRAM__3: "快",
    RGBW_AUTOMATIC__PROGRAM__4: "篝火",
    RGBW_AUTOMATIC__PROGRAM__5: "瀑布",
    RGBW_AUTOMATIC__PROGRAM__6: "电视",
    RGBW_AUTOMATIC__ON_TIME: "责任",
    RGBW_AUTOMATIC__RAMP_TIME: "调光",
    RGBW_AUTOMATIC__ACT_MIN_BOARDER: "** RGBW_AUTOMATIC__ACT_MIN_BOARDER",
    RGBW_AUTOMATIC__ACT_MAX_BOARDER: "** RGBW_AUTOMATIC__ACT_MAX_BOARDER",
    RGBW_AUTOMATIC__ACT_BRIGHTNESS: "当前亮度",
    RGBW_AUTOMATIC__ACT_MIN_BOARDER_STORE: "** RGBW_AUTOMATIC__ACT_MIN_BOARDER_STORE",
    RGBW_AUTOMATIC__ACT_MAX_BOARDER_STORE: "** RGBW_AUTOMATIC__ACT_MAX_BOARDER_STORE",
    RGBW_AUTOMATIC__ON_TIME_STORE: "** RGBW_AUTOMATIC__ON_TIME_STORE",
    RGBW_AUTOMATIC__RAMP_TIME_STORE: "** RGBW_AUTOMATIC__RAMP_TIME_STORE",
    RGBW_AUTOMATIC__ACT_BRIGHTNESS_STORE: "** RGBW_AUTOMATIC__ACT_BRIGHTNESS_STORE",
    RGBW_AUTOMATIC__INHIBIT: "-",
    RGBW_AUTOMATIC__USER_PROGRAM: "-",
    RGBW_COLOR__COLOR: "颜色",
    RGBW_COLOR__ON_TIME: "责任",
    RGBW_COLOR__RAMP_TIME: "调光",
    RGBW_COLOR__ACT_BRIGHTNESS: "当前的亮度",
    RGBW_COLOR__ACT_HSV_COLOR_VALUE: "HSV颜色值",
    RGBW_COLOR__ON_TIME_STORE: "** RGBW_COLOR__ON_TIME_STORE",
    RGBW_COLOR__RAMP_TIME_STORE: "** RGBW_COLOR__RAMP_TIME_STORE",
    RGBW_COLOR__ACT_BRIGHTNESS_STORE: "** RGBW_COLOR__ACT_BRIGHTNESS_STORE",
    RGBW_COLOR__ACT_HSV_COLOR_VALUE_STORE: "** RGBW_COLOR__ACT_HSV_COLOR_VALUE_STORE",
    RGBW_COLOR__INHIBIT: "-",
    RGBW_COLOR__USER_COLOR: "-",
    ROTARY_HANDLE_SENSOR__STATE__0: "锁定",
    ROTARY_HANDLE_SENSOR__STATE__1: "放倒",
    ROTARY_HANDLE_SENSOR__STATE__2: "打开",
    ROTARY_HANDLE_SENSOR__ERROR__0: "-",
    ROTARY_HANDLE_SENSOR__ERROR__1: "破坏引发的",
    ROTARY_HANDLE_SENSOR__LOWBAT__TRUE: "电池电量低",
    ROTARY_HANDLE_SENSOR__LOWBAT__FALSE: "-",
    SENSOR__COUNTER: "-",
    SENSOR__SUM: "总消费",
    SENSOR__SUM_DATE: "时间戳初始化总消费量计数器",
    SENSOR__SUM_DATE_ISO: "-",
    SENSOR__SUM_RESET: "总消费量复位",
    SENSOR__CONTROL__0: "未知",
    SENSOR__CONTROL__1: "AC米",
    SENSOR__CONTROL__2: "有效的电能表",
    SENSOR__CONTROL__3: "煤气表",
    SENSOR__SENSOR__TRUE: "** SENSOR__SENSOR__TRUE",
    SENSOR__SENSOR__FALSE: "** SENSOR__SENSOR__FALSE",
    SENSOR__STATE__TRUE: "上",
    SENSOR__STATE__FALSE: "关",
    SENSOR__NOTIFICATION: "-",
    SENSOR__MEAN5MINUTES: "平均消费(5分)",
    SENSOR__MAX5MINUTES: "最大的消费(5分)",
    SENSOR__SUM_1H: "消费最后一小时",
    SENSOR__MAX_1H: "最大的消费最后一小时",
    SENSOR__SUM_24H: "消耗(24小时)",
    SENSOR__MAX_24H: "最大的消费(24小时)",
    SENSOR__METER: "米",
    SENSOR__MISS_24H: "-",
    SENSOR__LAST_VALUE: "平均消费量在过去的测量间隔",
    SENSOR__LAST_TICKS: "最后一次测量间隔时间(秒)10(GZ)",
    SENSOR__UNITSPTURN: "转换系数",
    SENSOR__DISTANCE: "接近传感器",
    SENSOR__F_PERCENT: "级别百分比",
    SENSOR__F_LEVEL: "水平",
    SENSOR__F_VOLUME: "能力",
    SENSOR__RELAIS1__TRUE: "继电器1",
    SENSOR__RELAIS1__FALSE: "继电器1关",
    SENSOR__RELAIS2__TRUE: "继电器2",
    SENSOR__RELAIS2__FALSE: "继电器2关",
    SENSOR__MODE: "** SENSOR__MODE",
    SENSOR__VANE: "** SENSOR__VANE",
    SENSOR__SPEED: "** SENSOR__SPEED",
    SENSOR__ROOM: "** SENSOR__ROOM",
    SENSOR__INFO: "传感器类型",
    SENSOR__ERROR: "错误信息",
    SENSOR__ON_TIME: "责任",
    SENSOR_FOR_CARBON_DIOXIDE__STATE__0: "CO<SUB>2</SUB>浓度正常",
    SENSOR_FOR_CARBON_DIOXIDE__STATE__1: "CO<SUB>2</SUB>浓度增高",
    SENSOR_FOR_CARBON_DIOXIDE__STATE__2: "CO<SUB>2</SUB>浓度大大增加",
    SHUTTER_CONTACT__STATE__TRUE: "打开",
    SHUTTER_CONTACT__STATE__FALSE: "封闭",
    SHUTTER_CONTACT__ERROR__0: "-",
    SHUTTER_CONTACT__ERROR__1: "破坏引发的",
    SHUTTER_CONTACT__LOWBAT__TRUE: "电池电量低",
    SHUTTER_CONTACT__LOWBAT__FALSE: "-",
    SHUTTER_CONTACT__INHIBIT: "-",
    SIGNAL_CHIME__STATE__TRUE: "上",
    SIGNAL_CHIME__STATE__FALSE: "关",
    SIGNAL_CHIME__ON_TIME: "责任",
    SIGNAL_CHIME__INHIBIT: "-",
    SIGNAL_CHIME__WORKING: "-",
    SIGNAL_LED__STATE__TRUE: "上",
    SIGNAL_LED__STATE__FALSE: "关",
    SIGNAL_LED__ON_TIME: "责任",
    SIGNAL_LED__INHIBIT: "-",
    SIGNAL_LED__WORKING: "-",
    SMOKE_DETECTOR__STATE__TRUE: "烟注册",
    SMOKE_DETECTOR__STATE__FALSE: "行",
    SMOKE_DETECTOR__ERROR_ALARM_TEST__0: "-",
    SMOKE_DETECTOR__ERROR_ALARM_TEST__1: "报警试验失败",
    SMOKE_DETECTOR__ERROR_SMOKE_CHAMBER__0: "-",
    SMOKE_DETECTOR__ERROR_SMOKE_CHAMBER__1: "降级烟腔",
    SMOKE_DETECTOR__LOWBAT__TRUE: "电池电量低",
    SMOKE_DETECTOR__LOWBAT__FALSE: "-",
    SMOKE_DETECTOR_TEAM__STATE__TRUE: "烟注册",
    SMOKE_DETECTOR_TEAM__STATE__FALSE: "行",
    STATUS_INDICATOR__STATE__TRUE: "上",
    STATUS_INDICATOR__STATE__FALSE: "关",
    STATUS_INDICATOR__ON_TIME: "责任",
    STATUS_INDICATOR__INHIBIT: "-",
    STATUS_INDICATOR__WORKING: "-",
    SYSTEM__TIMER_STOP: "取消计时器",
    SYSTEM__TIMER_SET: "设置计时器",
    SYSTEM__TIMER_EVENT: "-",
    SYSTEM__STATE__TRUE: "上",
    SYSTEM__STATE__FALSE: "关",
    SYSTEM__TIMER_GET: "剩余时间",
    SYSTEM__CMD_RET: "-",
    SYSTEM__WORKING: "-",
    SYSTEM__LEVEL: "** SYSTEM__LEVEL",
    SYSTEM__OLD_LEVEL: "** SYSTEM__OLD_LEVEL",
    SYSTEM__STOP: "** SYSTEM__STOP",
    SYSTEM__CMD_RUNS: "短按",
    SYSTEM__CMD_RUNL: "长按",
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
    SYSTEM__SEND: "按键上的WebUI中",
    SYSTEM__MAILTO: "电子邮件收件人",
    SYSTEM__MAILCC: "电子邮件抄送",
    SYSTEM__SUBJECT: "邮件主题",
    SYSTEM__TYPE__0: "文本",
    SYSTEM__TYPE__1: "HTML",
    SYSTEM__TYPE__2: "报警",
    SYSTEM__TEXT: "文本",
    SYSTEM__TEMPLATEID: "模板ID",
    SYSTEM__OPTION_1: "数据的预定义模板1",
    SYSTEM__OPTION_2: "数据的预定义模板2",
    SYSTEM__OPTION_3: "数据的预定义模板3",
    SYSTEM__OPTION_4: "数据的预定义模板4",
    SYSTEM__OPTION_5: "数据的预定义模板5",
    SYSTEM__RETURN: "通过函数调用的返回值",
    SYSTEM__PHONE: "短信电话号",
    SYSTEM__PRIORITY__0: "低优先级",
    SYSTEM__PRIORITY__1: "优先级正常",
    SYSTEM__PRIORITY__2: "重要优先",
    SYSTEM__PRIORITY__3: "高优先级",
    SYSTEM__PRIORITY__4: "优先考虑的关键",
    SYSTEM__APIKEY: "-",
    SWITCH__INFO: "注册地址",
    SWITCH__IP: "地址由DNS解析",
    SWITCH__UNREACH_CTR: "失败的尝试",
    SWITCH__STATE__TRUE: "上",
    SWITCH__STATE__FALSE: "关",
    SWITCH__ON_TIME: "责任",
    SWITCH__INHIBIT: "-",
    SWITCH__WORKING: "-",
    SWITCH__TOGGLE: "改变状态",
    SWITCH__PROG_TIMER: "-",
    SWITCH__SWITCH_1H: "电源UPS(1小时)",
    SWITCH__TIME_ON_1H: "总时间(上)(1小时)",
    SWITCH__TIME_OFF_1H: "总时间(关)(1小时)",
    SWITCH__TIME_ON: "最后期限(上)",
    SWITCH__TIME_OFF: "最后期限(关)",
    SWITCH__TIME_ON_SUM: "总时间(上)",
    SWITCH__SWITCH_SUM: "一些加电",
    SWITCH__TIME_ON_EVENT: "-",
    SWITCH__TIME_OFF_EVENT: "-",
    SWITCH__TIME_STATE__TRUE: "上",
    SWITCH__TIME_STATE__FALSE: "关",
    SWITCH__INFO_LED__0: "关",
    SWITCH__INFO_LED__1: "绿色",
    SWITCH__INFO_LED__2: "橙色",
    SWITCH__INFO_LED__3: "红",
    SWITCH__SUM_RESET: "计数器复位",
    SWITCH__SET_STATE: "设定值",
    SWITCH__NIGHT_MODE: "夜间模式",
    SWITCH__NIGHT_MODE__TRUE: "夜间模式",
    SWITCH__NIGHT_MODE__FALSE: "-",
    SWITCH__POWER: "电流输出",
    SWITCH__ERROR_OVERLOAD__TRUE: "超载",
    SWITCH__ERROR_OVERLOAD__FALSE: "-",
    SWITCH__ENERGY_COUNTER: "目前的能源消费",
    SWITCH__RCVS: "** SWITCH__RCVS",
    SWITCH__RCVL: "** SWITCH__RCVL",
    SWITCH__SEND_CMD: "** SWITCH__SEND_CMD",
    SWITCH_INTERFACE__PRESS: "** SWITCH_INTERFACE__PRESS",
    SWITCH_TRANSMIT__DECISION_VALUE: "** SWITCH_TRANSMIT__DECISION_VALUE",
    THERMALCONTROL_TRANSMIT__LOWBAT_REPORTING__TRUE: "电池电量低",
    THERMALCONTROL_TRANSMIT__LOWBAT_REPORTING__FALSE: "-",
    THERMALCONTROL_TRANSMIT__COMMUNICATION_REPORTING__TRUE: "通信错误",
    THERMALCONTROL_TRANSMIT__COMMUNICATION_REPORTING__FALSE: "-",
    THERMALCONTROL_TRANSMIT__WINDOW_OPEN_REPORTING__TRUE: "窗口中打开",
    THERMALCONTROL_TRANSMIT__WINDOW_OPEN_REPORTING__FALSE: "-",
    THERMALCONTROL_TRANSMIT__BATTERY_STATE: "** THERMALCONTROL_TRANSMIT__BATTERY_STATE",
    THERMALCONTROL_TRANSMIT__ACTUAL_TEMPERATURE: "温度",
    THERMALCONTROL_TRANSMIT__ACTUAL_HUMIDITY: "当前湿度",
    THERMALCONTROL_TRANSMIT__BOOST_MODE: "升压模式",
    THERMALCONTROL_TRANSMIT__LOWERING_MODE: "降",
    THERMALCONTROL_TRANSMIT__MANU_MODE: "手动",
    THERMALCONTROL_TRANSMIT__COMFORT_MODE: "舒适",
    THERMALCONTROL_TRANSMIT__AUTO_MODE: "自动",
    THERMALCONTROL_TRANSMIT__CONTROL_MODE: "-",
    THERMALCONTROL_TRANSMIT__BOOST_STATE: "-",
    THERMALCONTROL_TRANSMIT__PARTY_MODE_SUBMIT: "-",
    THERMALCONTROL_TRANSMIT__PARTY_TEMPERATURE: "温度",
    THERMALCONTROL_TRANSMIT__PARTY_START: "开始时间",
    THERMALCONTROL_TRANSMIT__PARTY_START_TIME: "-",
    THERMALCONTROL_TRANSMIT__PARTY_START_DAY: "-",
    THERMALCONTROL_TRANSMIT__PARTY_START_MONTH: "-",
    THERMALCONTROL_TRANSMIT__PARTY_START_YEAR: "-",
    THERMALCONTROL_TRANSMIT__PARTY_STOP: "结束时间",
    THERMALCONTROL_TRANSMIT__PARTY_STOP_TIME: "-",
    THERMALCONTROL_TRANSMIT__PARTY_STOP_DAY: "-",
    THERMALCONTROL_TRANSMIT__PARTY_STOP_MONTH: "-",
    THERMALCONTROL_TRANSMIT__PARTY_STOP_YEAR: "-",
    TILT_SENSOR__STATE__TRUE: "倾斜注册",
    TILT_SENSOR__STATE__FALSE: "行",
    TILT_SENSOR__LOWBAT__TRUE: "电池电量低",
    TILT_SENSOR__LOWBAT__FALSE: "-",
    VIRTUAL_DIMMER__OLD_LEVEL: "恢复上次调光",
    VIRTUAL_DIMMER__RAMP_TIME: "调光",
    VIRTUAL_DIMMER__ON_TIME: "责任",
    VIRTUAL_DIMMER__RAMP_STOP: "停调光",
    VIRTUAL_DIMMER__INHIBIT: "-",
    VIRTUAL_DIMMER__WORKING: "-",
    VIRTUAL_DIMMER__DIRECTION: "-",
    VIRTUAL_DIMMER__ERROR__0: "-",
    VIRTUAL_DIMMER__ERROR__1: "充电错误",
    VIRTUAL_DIMMER__ERROR_REDUCED__FALSE: "-",
    VIRTUAL_DIMMER__ERROR_REDUCED__TRUE: "低功耗",
    VIRTUAL_DIMMER__ERROR_OVERHEAT__FALSE: "-",
    VIRTUAL_DIMMER__ERROR_OVERHEAT__TRUE: "过热",
    VIRTUAL_DIMMER__ERROR_OVERLOAD__FALSE: "-",
    VIRTUAL_DIMMER__ERROR_OVERLOAD__TRUE: "超载",
    VIRTUAL_DIMMER__LEVEL_REAL: "真正的价值",
    VIRTUAL_KEY__PRESS_SHORT: "短按",
    VIRTUAL_KEY__PRESS_LONG: "长按",
    VIRTUAL_KEY__LEVEL: "-",
    WATERDETECTIONSENSOR__STATE__0: "干",
    WATERDETECTIONSENSOR__STATE__1: "潮湿",
    WATERDETECTIONSENSOR__STATE__2: "湿",
    WATERDETECTIONSENSOR__LOWBAT__TRUE: "电池电量低",
    WATERDETECTIONSENSOR__LOWBAT__FALSE: "-",
    WEATHER__HUMIDITY: "湿度",
    WEATHER__HUMIDITYF: "-",
    WEATHER__TEMPERATURE: "温度",
    WEATHER__WIND_SPEED: "风速",
    WEATHER__WIND_DIRECTION: "风向",
    WEATHER__WIND_DIRECTION_RANGE: "风向范围",
    WEATHER__SUNSHINEDURATION: "日照时数",
    WEATHER__RAINING__TRUE: "雨",
    WEATHER__RAINING__FALSE: "-",
    WEATHER__RAIN_COUNTER: "降雨",
    WEATHER__RAIN_CTR: "降雨",
    WEATHER__DEW_POINT: "露点",
    WEATHER__ABS_HUMIDITY: "绝对湿度",
    WEATHER__TEMP_MIN_24H: "最小温度(24小时)",
    WEATHER__TEMP_MAX_24H: "最大温度(24小时)。",
    WEATHER__HUM_MIN_24H: "最小湿度(24小时)",
    WEATHER__HUM_MAX_24H: "最大湿度(24小时)。",
    WEATHER__WIND_MAX_24H: "最大风速(24小时)",
    WEATHER__RAIN_CTR_24H: "降雨(24小时)",
    WEATHER__MISS_24H: "-",
    WEATHER__BRIGHTNESS: "亮度",
    WEATHER__LOWBAT__TRUE: "电池电量低",
    WEATHER__LOWBAT__FALSE: "-",
    WEATHER__AIR_PRESSURE: "压力",
    WEATHER__SET_HUMIDITY: "设定的湿度",
    WEATHER__MEDIAN: "核心价值",
    WEATHER__MEAN: "平均",
    WEATHER__BRIGHTNESS_WEST: "亮度西",
    WEATHER__BRIGHTNESS_SOUTH: "亮度南",
    WEATHER__BRIGHTNESS_EAST: "亮度东",
    WEATHER_TRANSMIT__HUMIDITY: "湿度",
    WEATHER_TRANSMIT__TEMPERATURE: "温度",
    WEBCAM__INFO: "信息文本",
    WEBCAM__IMAGE: "图片",
    WEBCAM__PTZ_CMD: "预定义的函数",
    WEBCAM__IR__0: "红外LED灭",
    WEBCAM__IR__1: "红外LED汽车",
    WEBCAM__IR__2: "红外线LED的",
    WINMATIC__SPEED: "速度",
    WINMATIC__STOP: "停止",
    WINMATIC__RELOCK_DELAY: "时间后自动锁定",
    WINMATIC__STATE_UNCERTAIN__TRUE: "不确定状态",
    WINMATIC__STATE_UNCERTAIN__FALSE: "-",
    WINMATIC__DIRECTION: "-",
    WINMATIC__INHIBIT: "-",
    WINMATIC__WORKING: "-",
    WINMATIC__ERROR__0: "-",
    WINMATIC__ERROR__1: "错误回转电动执行器",
    WINMATIC__ERROR__2: "错误倾斜驱动",
    WRAPPER__MEDIAN: "核心价值",
    WRAPPER__MEAN: "平均",
    WRAPPER__SET_STATE: "设置状态",
    WRAPPER__TIME_ON_1H: "总时间(上)(1小时)",
    WRAPPER__TIME_OFF_1H: "总时间(关)(1小时)",
    WRAPPER__SWITCH_1H: "电源UPS(1小时)",
    WRAPPER__TIME_ON_24H: "总时间(上)(24小时)",
    WRAPPER__TIME_OFF_24H: "总时间(关)(24小时)",
    WRAPPER__SWITCH_24H: "电源UPS(24小时)",
    WRAPPER__PERCENT_ON_24H: "百分比(上)(24小时)",
    WRAPPER__TIME_ON_168H: "总时间(上)(7天)",
    WRAPPER__TIME_OFF_168H: "总时间(关闭)(7天)",
    WRAPPER__SWITCH_168H: "电源UPS(7踏歌)",
    WRAPPER__PERCENT_ON_168H: "个(上)(7天)",
    WRAPPER__TIME_ON_HHH: "总时间(上)",
    WRAPPER__TIME_OFF_HHH: "总时间(关闭)",
    WRAPPER__SWITCH_HHH: "加电",
    WRAPPER__PERCENT_ON_HHH: "百分比",
    WRAPPER__STATE__TRUE: "上",
    WRAPPER__STATE__FALSE: "关",
    WRAPPER__TIME_ON: "最后期限(上)",
    WRAPPER__TIME_OFF: "最后期限(关)",
    WRAPPER__TIME_ON_EVENT: "-",
    WRAPPER__TIME_OFF_EVENT: "-",
    WRAPPER__LIGHT: "** WRAPPER__LIGHT",
    // Servicemeldungen
    ALARMDP__CONFIG_PENDING: "配置数据传输",
    ALARMDP__DEVICE_IN_BOOTLOADER: "设备重新启动",
    ALARMDP__LOWBAT: "电池电量低",
    ALARMDP__STICKY_UNREACH: "通信被打乱了",
    ALARMDP__U_SOURCE_FAIL: "电源故障",
    ALARMDP__UNREACH: "沟通不安的时候",
    ALARMDP__UPDATE_PENDING: "更新",
    ALARMDP__USBH_POWERFAIL: "USB主机禁用",
    //Sprachen
    DE: "德国",
    EN: "英语",
    ES: "西班牙语",
    FR: "法国人",
    PT: "葡萄牙",
    RU: "俄罗斯",
    TR: "土耳其",
    ZH: "中国人",
    LANGUAGE: "语言",
    //CCU Bezeichnungen
    ROOMLIVINGROOM: "客厅",
    ROOMKITCHEN: "厨房",
    ROOMBEDROOM: "大床房",
    ROOMCHILDRENSROOM1: "儿童房1",
    ROOMCHILDRENSROOM2: "儿童房2",
    ROOMOFFICE: "家庭办公",
    ROOMBATHROOM: "卫生间",
    ROOMGARAGE: "车库",
    ROOMHWR: "杂物间",
    ROOMGARDEN: "花园",
    ROOMTERRACE: "露台",
    FUNCLIGHT: "光",
    FUNCHEATING: "供暖",
    FUNCCLIMATECONTROL: "气候条件",
    FUNCWEATHER: "天气",
    FUNCENVIRONMENT: "环境",
    FUNCSECURITY: "安全性",
    FUNCLOCK: "锁定",
    FUNCBUTTON: "按钮",
    FUNCCENTRAL: "中央控制单元",
    FUNCENERGY: "能源管理",
    //Andere Bezeichnungen
    OPEN: "打开",
    OPEN_SHORT: "开放",
    CLOSE: "关闭",
    CLOSE_SHORT: "关闭",
    LOCKED: "锁定",
    LOCK: "锁定",
    ON: "上",
    OFF: "关",
    MAX: "最大",
    MED: "配有",
    MIN: "分钟",
    RUN: "跑",
    SAVE: "拯救",
    YES: "是",
    NO: "没有",
    VISIBILITY: "能见度",
    DELETE: "删除",
    UPLOAD: "上载",
    VARIABLES: "系统变量",
    PROGRAMS: "计划",
    FAVORITES: "收藏夹",
    ROOMS: "房间",
    FUNCTIONS: "功能",
    EDIT: "编辑",
    OPTIONS: "选项",
    OPTIONS_CLIENT: "该设备选项",
    TEST_DEVICE: "测试页HM",
    TEST_CUXD: "测试页CUXD",
    UNKNOWN_ERROR: "未知错误",
    NO_SERVICE_MESSAGES: "无可用服务的消息。",
    UNKNOWN_VAR_TYPE: "未知变量类型",
    SETTINGS: "设置",
    TIME_SEC_SINGULAR: "第二",
    TIME_SEC_PLURAL: "秒",
    TIME_MIN_SINGULAR: "分",
    TIME_MIN_PLURAL: "分钟",
    TIME_H_SINGULAR: "小时",
    TIME_H_PLURAL: "小时",
    TIME_DAY_SINGULAR: "天",
    TIME_DAY_PLURAL: "天",
    TIME_W_SINGULAR: "周",
    TIME_W_PLURAL: "周",
    TIME_MON_SINGULAR: "月",
    TIME_MON_PLURAL: "月",
    TIME_Y_SINGULAR: "年",
    TIME_Y_PLURAL: "年",
    TIME_PREFIX: " ",
    TIME_SUFFIX: "以前",
    LOADING: "充电",
    SET: "设置",
    DEFAULT: "默认",
    BLACK: "黑",
    PINK: "粉红色",
    GREEN: "绿色",
    YELLOW: "黄",
    GREY: "灰",
    BLUE: "蓝",
    RED: "红",
    BROWN: "棕色",
    WHITE: "白",
    BRAZIL: "巴西",
    GERMANY: "德国",
    SHOW: "秀",
    HIDE: "隐藏",
    NO_VALUE: "否",
    SMALL: "小",
    BIG: "大",
    GRAPHICS_SIZE: "大小的图形",
    FILTER: "过滤数据......",
    TRANSFER: "转移......",
    DELAY: "值仍然只有在这里延迟传输到设备并显示出来。",
    TRANSFER_OK: "好吧!",
    IMAGE_UPLOAD: "它只能JPG,GIF或PNG上传!",
    START: "开始......",
    NEW_VERSION: "新版本WebMatic",
    DOWNLOAD: "下载链接",
    MANUAL: "只有手动执行",
    OPERATABLE: "可操作",
    HISTORIAN_DURATION: "最后...",
    CHOOSE_THEME: "选择主题",
    NOT_SELECTED: "全局设置",
    DESIGN: "外观",
    FONT: "字形",
    MENU: "菜单项",
    DEFAULT_OPEN: "显示的第一个电话",
    DEFAULT_READONLY: "可变标准只读",
    HISTORIAN_WARNING: "在设置>选项URL输入",
    NEW_UPDATES_WARNING: "关于新版本的信息",
    STABLE: "只有稳定的版本",
    ALPHA: "同时阿尔法版本",
    OTHERS: "其余",
    DONT_LEAVE: "防止意外离开当前页面",
    CHOOSE: "请选择",
    DELETE_SETTINGS: "删除设置",
    RELOAD: "重装",
    CLIENT_SETTINGS: "客户端设置",
    CLIENT_TITLE: "客户端的名称",
    DEFAULT_SORT: "标准分类",
    ALPHABETICAL: "按字母顺序",
    MANUALLY: "手动",
    DELETE_SETTINGS_WARNING: "注意所选客户端的所有设置都将被删除",
    END_CLIENT_MODUS: "最终客户端安装模式",
    REMOVE_MESSAGES: "删除过时的障碍",
    ABOUT: "关于",
    SERVICE_NOTE: "服务通知",
    NO_DISORDERS: "没有可用的服务信息",
    TWO_SITES_VERSION: "显示2页",
    TWO_SITES_TRANSITION: "作者在页面的变化",
    BACK: "背部",
    NUMBER_OF_COLUMNS: "列数",
    STEP: "步",
    FACTOR: "因素",
    SHOW_DESCRIPTION: "展会介绍",
    SHOW_LAST_TIME_USED: "显示上一次使用",
    WORKSPACE: "职场",
    ONLY_PIC: "只有图形",
    DIVIDE: "划分",
    ADD_DIVIDER: "添加分区",
    UNSORTED: "没有排序",
    SAVE_AND_RELOAD: "保存并重新加载"
};