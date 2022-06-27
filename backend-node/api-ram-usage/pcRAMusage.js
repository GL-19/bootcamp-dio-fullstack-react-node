const os = require("os");

setInterval(() => {
	const { arch, platform, totalmem, freemem } = os;
	const tRAM = parseInt(totalmem() / 1024 / 1024);
	const fRAM = parseInt(freemem() / 1024 / 1024);
	const usage = 100 * (1 - fRAM / tRAM);

	const stats = {
		OS: platform(),
		Arch: arch(),
		TotalRAM: `${tRAM} MB`,
		FreeRAM: `${fRAM} MB`,
		usage: `${usage.toFixed(4)}%`,
	};
	console.clear();
	console.table(stats);
	exports.stats = stats;
}, 1000);
