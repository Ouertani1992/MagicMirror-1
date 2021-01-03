/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {

/*

	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses

*/

	address: "192.168.2.111", 
	port: 8080,
	basePath: "/", 	
	//ipWhitelist: ["192.168.2.101", "::ffff:192.168.2.101", "::1"],
	
	ipWhitelist: ["192.168.2.108", "::ffff:192.168.2.108", "::1"],


	

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "de",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"],
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "Sassou Kalender",
			position: "top_left",
			config: {
				colored: true,
			
				calendars: [
					{
						color : "#FF00FF",
						symbol: "calendar-check",
						url: "https://calendar.google.com/calendar/ical/neuhausensabine723%40gmail.com/private-48665ad4e9be7c5b555de9a0bba12109/basic.ics"},
                                   
				],
				maximumNumberOfDays: '30'
			}
			},
			{
			module: "calendar",
			header: "Belhassen Kalender",
			position: "top_left",
			config: {
				colored: true,
				calendars: [
					{	
						color : "#FFBF00",
						symbol: "calendar-check",
						url : "https://calendar.google.com/calendar/ical/belhsan1warteni%40gmail.com/private-0d4b8d601164187f1e0bddc7de779a72/basic.ics",
						maximumNumberOfDays: '30'
								},
								{
						symbol: "calendar-check",
						color : "#01DF01",
						url: "https://www.google.com/calendar/ical/dp9qb4nvou913fag83erse2ri8%40group.calendar.google.com/public/basic.ics" ,					
						maximumNumberOfDays: "7"
						}
				],          
                     
			}
			},
			{
				module: "calendar",
				header: "Feiertage Nordrhein-Westfalen",
				position: "top_left",
				config: {
					colored: true,
					calendars: [
						{
							symbol: "calendar-check",
							url: "https://www.schulferien.org/media/ical/deutschland/feiertage_nordrhein-westfalen_2021.ics?k=tXmUhaPfZbwtcvfyNmtNf-feOStwpvUbFABOKTJCyaiiSgnPUpWkMWHXFd1pkGiGKv64w2fydeGT5Cuc2x63Wa8-9PzVpbz_eTj2IVW2OXs" 					
							}
					],
	             
	              maximumNumberOfDays: '120',
				}
			},
			{
				module: "compliments",
				position: "bottom_bar"//"bottom_center"
			},
			{
			module: "MMM-OpenmapWeather",
			position: "top_right",	// This can be any of the regions.
			//header: "Jüchen, Neuss",
										// Best results in left or right regions.
			config: {
				// See 'Configuration options' for more information.
				location: "Jüchen, Neuss",
				locationID: "3247434", //Location ID from http://openweathermap.org/help/city_list.txt
				appid: "c161aa9bce5a83a2eb64f754db5fb9ea",  //openweathermap.org API key
	      			colorIcon: true
			}
			},
			{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "Jüchen",
				locationID: "3247434", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "c161aa9bce5a83a2eb64f754db5fb9ea",
				colored: true,
				showRainAmount: true,
				updateInterval: 600000,
			}
			},
			{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "NACHRICHTEN",
						url: "https://rss.dw.com/xml/rss-de-news" 
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
			},
			{
			module: 'MMM-Globe',
			position: 'middle_center',
			config: {
				style: 'europeDiscNat',
				imageSize: 400,
				ownImagePath:'',
				updateInterval: 10*60*1000
			}
			},
			

			 

			/*{ Frank Gebutstag Modul https://github.com/roramirez/MMM-ImagesPhotos
			module: 'MMM-ImagesPhotos',
			position: "fullscreen_below" ,//'middle_center',
			config: {
					opacity: 1,
					animationSpeed: 50,
					updateInterval: 5000000,
					}
			},*/ 
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
