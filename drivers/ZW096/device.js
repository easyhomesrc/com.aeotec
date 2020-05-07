'use strict';

const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

class AeotecSmartSwitchSixDevice extends ZwaveDevice {
	
	onMeshInit() {
		this.registerCapability('onoff', 'SWITCH_BINARY');
		this.registerReportListener('BASIC', "BASIC_REPORT", (report) => {
			this.setCapabilityValue('onoff', !!report.Value);
		});

		this.registerCapability('measure_power', 'METER');
		this.registerCapability('meter_power', 'METER');

		this.registerSetting('80', value => new Buffer([(value) ? 2 : 0]));
	}
	
}

module.exports = AeotecSmartSwitchSixDevice;