/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/getting-started/configuration.html#general
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: 'MMM-SimpleText',
			position: 'top_left',
			config: {
				   text: {
					 'value': 'Kozmic Family Calendar'
				   },
				   fontURL: {
					 'value': 'Tahoma, Geneva, sans-serif'
				   },
				   fontSize: {
					 'value': '45pt'
				   },
				   fontStyle: {
					 'value': 'bold'
				   },
				   color: {
					 'value': '#FFFFFF'
				   }
			   }
	   },
	   {
			module: 'MMM-quotes',
			position: 'bottom_center',	// This can be any of the regions. Best results in left or right regions.
			config: {
				// See 'Configuration options' for more information.
				// quotes: [{
				// 	quote: 'To be, or not to be. That is the question',
				// 	author: 'William Shakespeare'
				// }]
			}
		},
		{
			module: "clock",
			position: "top_right",
			config: {
				timeFormat: 12,
				timezone: "America/Chicago",
				displaySeconds: false,
				showPeriod: true,
				showPeriodUpper: false
			}
		},
		{
			module: "MMM-OpenmapWeather",
			position: "top_right",	
			header: "Current Weather", //Location is the default value if header is empty or not defined.
			config: {
				locationID: "4896012", 
				appid: "d4fac2078e2f574cadbf793b427dbfb6",  //openweathermap.org API key
				colorIcon: true,
				units: "imperial",
				timeFormat: 12,
				roundTemp: true,
				showPeriod: true,
				showHumidity: true,
				showFeelsLike: false,
				showDewpoint: false,
				showPressure: false
			}
		},
		{
			module: 'MMM-CalendarExt2',
			config: {
			  calendars : [
				{
					name: "US Holidays",
					icon: "noto-beach-with-umbrella",
					className: "holiday",
					url: "https://calendar.google.com/calendar/ical/en.usa%23holiday%40group.v.calendar.google.com/public/basic.ics",
				},
				{
				  url: "https://calendar.google.com/calendar/ical/akozmic%40gmail.com/private-3d01dd47b4b9ff6839b7b9c7ee035bb3/basic.ics",
				  className: "adam"
				},
				{
				  url: "https://calendar.google.com/calendar/ical/srottman%40gmail.com/private-3879d7954e472c7bf0d33e15ba68f8b0/basic.ics",
				  className: "sarah"
				}
			  ],
			  views: [
				{
					name: "Overview",
					title: "Upcoming Schedule",
					mode: "daily",
					position: "top_right",
					slotCount: 5,
					locale: "en",
					hideOverflow: true,
					hideFooter: true,
					timeFormat: "h:mma"
				},
				{
					name: "Month",
					mode: "month",
					position: "middle_center",
					locale: "en",
					hideOverflow: true,
					hideFooter: true,
					timeFormat: "h:mma"
				},
			  ],
			  scenes: [
				{
				  name: "DEFAULT",
				},
			  ],
			},
		  },
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
