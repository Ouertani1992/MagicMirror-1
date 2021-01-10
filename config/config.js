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


	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses

/*

	address: "192.168.2.111", 
	port: 8080,
	basePath: "/", 	
	//ipWhitelist: ["192.168.2.101", "::ffff:192.168.2.101", "::1"],
	
	ipWhitelist: ["192.168.2.108", "::ffff:192.168.2.108", "::1"],

*/
	

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
			module: 'calendar_monthly',
			position: 'top_left',
			config: {
					// The config property is optional
					// Without a config, a default month view is shown
					// Please see the 'Configuration Options' section for more information
		}
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
			config: {
				// See 'Configuration options' for more information.
				location: "Jüchen, Neuss",
				locationID: "3247434", //Location ID from http://openweathermap.org/help/city_list.txt
				appid: "c161aa9bce5a83a2eb64f754db5fb9ea",  //openweathermap.org API key
	      			colorIcon: true,
	      			updateInterval: 60000, // Hier ist lösung damit Modul nicht blockiert
	      			showHumidity: true,
	      			initialLoadDelay: 0,
	      			lat: 51.1010078,
		        	lng: 6.4525687,
			}
			},
			{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			locationID: "3247434",
			config: {
				location: "Jüchen",
				locationID: "3247434", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "c161aa9bce5a83a2eb64f754db5fb9ea",
				colored: true,
				maxNumberOfDays: 10,
				calendarClass: "calendar",
				showRainAmount: true,
				updateInterval: 120000,
				initialLoadDelay: 2000,
				lat: 51.1010078,
		        lng: 6.4525687,
		        			
			}
			},
			{
		    module: "MMM-Fuel",
		    position: "top_right",
		    
		    config: {
		        api_key: "295ac1e6-9cb7-a85e-844a-d4abc5c34922",
		        provider: "tankerkoenig",
		        lat: 51.1010078,
		        lng: 6.4525687,
		        types: ["lpg", "e5"],
		        updateInterval: 120000,
		        rotateInterval: 90000,
		        radius: "4",
		        max: "3"
		        // all your config options, which are different than their default values
		    }
			},
			{
		  	module: "MMM-COVID19",
		    position: "top_right",
		    config: {
		      updateInterval: 300,
		      worldStats: true,
		      delta: true,
		      lastUpdateInfo: true,
		      countries: ["Argentina", "China", "Italy", "Spain" ],
				headerRowClass: "small",
		      rapidapiKey : "bf959312bfmsh55fca12931cfa70p1b2120jsna0d23e634c96" // this is an example, do not try to use it for real
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
			} ,
			{
			module: 'MMM-Globe',
			position: 'middle_center',
			config: {
				style: 'europeDiscNat',
				imageSize: 300,
				ownImagePath:'',
				updateInterval: 10*60*1000
			}
			},
			{
		    module: "MMM-GoogleAssistant",
		    position: "bottom_bar",
		    config: {
		        maxWidth: "100%",
		        header: "",
		    publishKey: 'pub-c-408135b8-9f85-4405-af4d-8c0fcd3723b5',
		    subscribeKey: 'sub-c-58f15218-51ad-11eb-9d3f-7e8713e36938',
		    updateDelay: 500
		    }
			},

			/*{
	        module: 'MMM-pages',// seite numme 2
	        config: {
	                modules:
	                    [[ "weatherforecast", "newsfeed"],
	                     [ "calendar", "compliments" ]],
	                fixed: ["MMM-Globe", "currentweather", "MMM-page-indicator"],
	                hiddenPages: {
	                    "screenSaver": [ "MMM-Globe", "MMM-SomeBackgroundImageModule" ],
	                    "admin": [ "MMM-ShowMeSystemStatsModule", "MMM-AnOnScreenMenuModule" ],
	                    PAGE_NUMBER_IS : 1,
            },
			}
			},////////////// Seiten Assistant
			{
	        module: 'MMM-pages',// seite numme 2
	        config: {
	                modules:
	                    [[ "weatherforecast", "newsfeed"],
	                     [ "calendar", "compliments" ]],
	                fixed: ["clock", "currentweather", "MMM-page-indicator"],
	                hiddenPages: {
	                    "screenSaver": [ "clock", "MMM-SomeBackgroundImageModule" ],
	                    "admin": [ "MMM-ShowMeSystemStatsModule", "MMM-AnOnScreenMenuModule" ],
	                    PAGE_NUMBER_IS: 2,
            },
			}
    		},
    		{
	        module: 'MMM-page-indicator',
	        position: 'bottom_bar',
	        config: {
	            pages: 2,
	        }
    		},*/

			 

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
