export type TriggerType = 'onCriticalSpeed' | 'onAirbrakeOn';

export interface Rule {
	readonly id: string;

	name: string;
	trigger: TriggerType;
	action: any[];
}
