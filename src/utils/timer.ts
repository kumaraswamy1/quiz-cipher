export const createTimer = (): Date => {
		const time = new Date();
		time.setSeconds(time.getSeconds() + 30);
		return time;
	};