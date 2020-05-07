'use strict';

const Homey = require('homey');

class AeotecDoorbellSixDriver extends Homey.Driver {
    onInit() {
        super.onInit();

        this.alarmOnFlow = new Homey.FlowCardAction('ZW162-turn_alarm_on')
            .register()
            .registerRunListener( async (args, state) => {
                if (!typeof(args.sound) === 'Number') return new Error('Sound should be a number');
                return await args.device.setSiren({sirenNumber: args.sound, sirenState: true});
            });
        this.alarmOffFlow = new Homey.FlowCardAction('ZW162-turn_alarm_off')
            .register()
            .registerRunListener( async (args, state) => {
                return await args.device.resetSiren();
            });
    }
}

module.exports = AeotecDoorbellSixDriver;
