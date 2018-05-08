//DATASET FROM KAGGLE: https://www.kaggle.com/stackoverflow/stack-overflow-tag-network/data
var nodes = [
	{
	"name": "html",
	"group": 6,
	"nodesize": 272.45
	},
	{
	"name": "css",
	"group": 6,
	"nodesize": 341.17
	},
	{
	"name": "hibernate",
	"group": 8,
	"nodesize": 29.83
	},
	{
	"name": "spring",
	"group": 8,
	"nodesize": 52.84
	},
	{
	"name": "ruby",
	"group": 3,
	"nodesize": 70.14
	},
	{
	"name": "ruby-on-rails",
	"group": 3,
	"nodesize": 55.31
	},
	{
	"name": "ios",
	"group": 4,
	"nodesize": 87.46
	},
	{
	"name": "swift",
	"group": 4,
	"nodesize": 63.62
	},
	{
	"name": "html5",
	"group": 6,
	"nodesize": 140.18
	},
	{
	"name": "c",
	"group": 1,
	"nodesize": 189.83
	},
	{
	"name": "c++",
	"group": 1,
	"nodesize": 268.11
	},
	{
	"name": "asp.net",
	"group": 2,
	"nodesize": 129.55
	},
	{
	"name": "c#",
	"group": 2,
	"nodesize": 321.13
	},
	{
	"name": "objective-c",
	"group": 4,
	"nodesize": 47.01
	},
	{
	"name": "javascript",
	"group": 6,
	"nodesize": 649.16
	},
	{
	"name": "jquery",
	"group": 6,
	"nodesize": 208.29
	},
	{
	"name": "redux",
	"group": 3,
	"nodesize": 8.52
	},
	{
	"name": "reactjs",
	"group": 3,
	"nodesize": 59.03
	},
	{
	"name": "php",
	"group": 6,
	"nodesize": 361.22
	},
	{
	"name": "mysql",
	"group": 6,
	"nodesize": 165.43
	},
	{
	"name": "spring-mvc",
	"group": 8,
	"nodesize": 18
	},
	{
	"name": ".net",
	"group": 2,
	"nodesize": 75.08
	},
	{
	"name": "react-native",
	"group": 3,
	"nodesize": 13.61
	},
	{
	"name": "spring-boot",
	"group": 8,
	"nodesize": 12.37
	},
	{
	"name": "less",
	"group": 6,
	"nodesize": 9.73
	},
	{
	"name": "sass",
	"group": 6,
	"nodesize": 30.55
	},
	{
	"name": "hadoop",
	"group": 10,
	"nodesize": 17.95
	},
	{
	"name": "apache-spark",
	"group": 10,
	"nodesize": 11.04
	},
	{
	"name": "sql-server",
	"group": 2,
	"nodesize": 64.62
	},
	{
	"name": "express",
	"group": 3,
	"nodesize": 14.27
	},
	{
	"name": "node.js",
	"group": 3,
	"nodesize": 117.36
	},
	{
	"name": "mongodb",
	"group": 3,
	"nodesize": 50.95
	},
	{
	"name": "iphone",
	"group": 4,
	"nodesize": 15.29
	},
	{
	"name": "github",
	"group": 5,
	"nodesize": 12.71
	},
	{
	"name": "git",
	"group": 5,
	"nodesize": 54.48
	},
	{
	"name": "excel",
	"group": 14,
	"nodesize": 12.5
	},
	{
	"name": "excel-vba",
	"group": 14,
	"nodesize": 11.38
	},
	{
	"name": "entity-framework",
	"group": 2,
	"nodesize": 12.88
	},
	{
	"name": "linq",
	"group": 2,
	"nodesize": 8.32
	},
	{
	"name": "wcf",
	"group": 2,
	"nodesize": 12.73
	},
	{
	"name": "wpf",
	"group": 2,
	"nodesize": 19.38
	},
	{
	"name": "android",
	"group": 4,
	"nodesize": 229.86
	},
	{
	"name": "java",
	"group": 8,
	"nodesize": 610.65
	},
	{
	"name": "scala",
	"group": 10,
	"nodesize": 27.02
	},
	{
	"name": "ajax",
	"group": 6,
	"nodesize": 35.41
	},
	{
	"name": "django",
	"group": 1,
	"nodesize": 40.91
	},
	{
	"name": "python",
	"group": 1,
	"nodesize": 438.67
	},
	{
	"name": "vba",
	"group": 14,
	"nodesize": 16.87
	},
	{
	"name": "xcode",
	"group": 4,
	"nodesize": 11.37
	},
	{
	"name": "apache",
	"group": 5,
	"nodesize": 13.17
	},
	{
	"name": "nginx",
	"group": 5,
	"nodesize": 9.49
	},
	{
	"name": "angularjs",
	"group": 6,
	"nodesize": 126.59
	},
	{
	"name": "asp.net-web-api",
	"group": 2,
	"nodesize": 11.28
	},
	{
	"name": "laravel",
	"group": 6,
	"nodesize": 32.12
	},
	{
	"name": "plsql",
	"group": 2,
	"nodesize": 10.32
	},
	{
	"name": "oracle",
	"group": 2,
	"nodesize": 30.19
	},
	{
	"name": "json",
	"group": 6,
	"nodesize": 25.38
	},
	{
	"name": "xml",
	"group": 6,
	"nodesize": 23.77
	},
	{
	"name": "flask",
	"group": 1,
	"nodesize": 9.39
	},
	{
	"name": "wordpress",
	"group": 6,
	"nodesize": 46.74
	},
	{
	"name": "java-ee",
	"group": 8,
	"nodesize": 22.45
	},
	{
	"name": "maven",
	"group": 8,
	"nodesize": 10.3
	},
	{
	"name": "jsp",
	"group": 8,
	"nodesize": 13.78
	},
	{
	"name": "bash",
	"group": 5,
	"nodesize": 23.91
	},
	{
	"name": "linux",
	"group": 5,
	"nodesize": 108.54
	},
	{
	"name": "angular2",
	"group": 7,
	"nodesize": 18.79
	},
	{
	"name": "typescript",
	"group": 7,
	"nodesize": 17.53
	},
	{
	"name": "codeigniter",
	"group": 6,
	"nodesize": 18.71
	},
	{
	"name": "tdd",
	"group": 12,
	"nodesize": 9.45
	},
	{
	"name": "agile",
	"group": 12,
	"nodesize": 12.22
	},
	{
	"name": "twitter-bootstrap",
	"group": 6,
	"nodesize": 31.05
	},
	{
	"name": "web-services",
	"group": 8,
	"nodesize": 18.94
	},
	{
	"name": "rest",
	"group": 8,
	"nodesize": 27.08
	},
	{
	"name": "testing",
	"group": 11,
	"nodesize": 8.95
	},
	{
	"name": "selenium",
	"group": 11,
	"nodesize": 12.7
	},
	{
	"name": "android-studio",
	"group": 4,
	"nodesize": 14.79
	},
	{
	"name": "redis",
	"group": 3,
	"nodesize": 13.85
	},
	{
	"name": "jenkins",
	"group": 9,
	"nodesize": 10.02
	},
	{
	"name": "docker",
	"group": 9,
	"nodesize": 22.85
	},
	{
	"name": "amazon-web-services",
	"group": 9,
	"nodesize": 30.05
	},
	{
	"name": "angular",
	"group": 7,
	"nodesize": 29.09
	},
	{
	"name": "osx",
	"group": 4,
	"nodesize": 12.58
	},
	{
	"name": "machine-learning",
	"group": 1,
	"nodesize": 44.21
	},
	{
	"name": "qt",
	"group": 1,
	"nodesize": 10.53
	},
	{
	"name": "windows",
	"group": 5,
	"nodesize": 19.71
	},
	{
	"name": "ubuntu",
	"group": 5,
	"nodesize": 11.98
	},
	{
	"name": "ionic-framework",
	"group": 6,
	"nodesize": 8.44
	},
	{
	"name": "elasticsearch",
	"group": 3,
	"nodesize": 10.82
	},
	{
	"name": "vue.js",
	"group": 6,
	"nodesize": 8.38
	},
	{
	"name": "r",
	"group": 1,
	"nodesize": 52.7
	},
	{
	"name": "embedded",
	"group": 1,
	"nodesize": 13.27
	},
	{
	"name": "go",
	"group": 9,
	"nodesize": 24.84
	},
	{
	"name": "visual-studio",
	"group": 2,
	"nodesize": 18.13
	},
	{
	"name": "postgresql",
	"group": 3,
	"nodesize": 39.03
	},
	{
	"name": "sql",
	"group": 2,
	"nodesize": 154.23
	},
	{
	"name": "unix",
	"group": 5,
	"nodesize": 15.67
	},
	{
	"name": "eclipse",
	"group": 8,
	"nodesize": 11.39
	},
	{
	"name": "vb.net",
	"group": 2,
	"nodesize": 23.56
	},
	{
	"name": "unity3d",
	"group": 2,
	"nodesize": 19.36
	},
	{
	"name": "devops",
	"group": 9,
	"nodesize": 9.81
	},
	{
	"name": "drupal",
	"group": 6,
	"nodesize": 8.25
	},
	{
	"name": "shell",
	"group": 5,
	"nodesize": 11.63
	},
	{
	"name": "bootstrap",
	"group": 6,
	"nodesize": 13.28
	},
	{
	"name": "xamarin",
	"group": 2,
	"nodesize": 11.18
	},
	{
	"name": "azure",
	"group": 2,
	"nodesize": 13.68
	},
	{
	"name": "mvc",
	"group": 2,
	"nodesize": 10.92
	},
	{
	"name": "haskell",
	"group": 10,
	"nodesize": 11.18
	},
	{
	"name": "api",
	"group": 8,
	"nodesize": 8.61
	},
	{
	"name": "twitter-bootstrap-3",
	"group": 6,
	"nodesize": 10.13
	},
	{
	"name": "regex",
	"group": 13,
	"nodesize": 9.46
	},
	{
	"name": "perl",
	"group": 13,
	"nodesize": 19.38
	},
	{
	"name": "cloud",
	"group": 9,
	"nodesize": 10.66
	},
	{
	"name": "photoshop",
	"group": 6,
	"nodesize": 12.62
	},
	{
	"name": "powershell",
	"group": 5,
	"nodesize": 9.85
	},
	{
	"name": "matlab",
	"group": 1,
	"nodesize": 27.21
	}

  ];
var links = [
	{
	"source": "azure",
	"target": ".net",
	"value": 20.933192346640457
	},
	{
	"source": "sql-server",
	"target": ".net",
	"value": 32.322524219339904
	},
	{
	"source": "asp.net",
	"target": ".net",
	"value": 48.40702996199019
	},
	{
	"source": "entity-framework",
	"target": ".net",
	"value": 24.37090250532431
	},
	{
	"source": "wpf",
	"target": ".net",
	"value": 32.35092522005943
	},
	{
	"source": "linq",
	"target": ".net",
	"value": 20.501743858149066
	},
	{
	"source": "wcf",
	"target": ".net",
	"value": 28.074400427611113
	},
	{
	"source": "c#",
	"target": ".net",
	"value": 62.167895042923824
	},
	{
	"source": "tdd",
	"target": "agile",
	"value": 37.146589924204555
	},
	{
	"source": "codeigniter",
	"target": "ajax",
	"value": 23.19190040565183
	},
	{
	"source": "jquery",
	"target": "ajax",
	"value": 50.56672861589973
	},
	{
	"source": "mysql",
	"target": "ajax",
	"value": 24.80008942291756
	},
	{
	"source": "css",
	"target": "ajax",
	"value": 26.613713724688935
	},
	{
	"source": "php",
	"target": "ajax",
	"value": 28.01067925660409
	},
	{
	"source": "javascript",
	"target": "ajax",
	"value": 24.39914442262329
	},
	{
	"source": "json",
	"target": "ajax",
	"value": 32.94744601093195
	},
	{
	"source": "cloud",
	"target": "amazon-web-services",
	"value": 21.31860679884144
	},
	{
	"source": "azure",
	"target": "amazon-web-services",
	"value": 21.30994959394633
	},
	{
	"source": "devops",
	"target": "amazon-web-services",
	"value": 24.98353120101788
	},
	{
	"source": "docker",
	"target": "amazon-web-services",
	"value": 32.198071014100535
	},
	{
	"source": "ios",
	"target": "android",
	"value": 39.77803622570551
	},
	{
	"source": "android-studio",
	"target": "android",
	"value": 33.661083176336234
	},
	{
	"source": "java",
	"target": "android",
	"value": 50.984730766476574
	},
	{
	"source": "android",
	"target": "android-studio",
	"value": 33.661083176336234
	},
	{
	"source": "typescript",
	"target": "angular",
	"value": 31.03648178393663
	},
	{
	"source": "typescript",
	"target": "angular2",
	"value": 38.87998222920348
	},
	{
	"source": "angularjs",
	"target": "angular2",
	"value": 26.032697164489267
	},
	{
	"source": "ionic-framework",
	"target": "angularjs",
	"value": 29.840445766924983
	},
	{
	"source": "reactjs",
	"target": "angularjs",
	"value": 31.62020230471286
	},
	{
	"source": "mongodb",
	"target": "angularjs",
	"value": 31.510711170360768
	},
	{
	"source": "css",
	"target": "angularjs",
	"value": 22.210413043130057
	},
	{
	"source": "sass",
	"target": "angularjs",
	"value": 20.425878416671157
	},
	{
	"source": "twitter-bootstrap",
	"target": "angularjs",
	"value": 24.153685861107462
	},
	{
	"source": "javascript",
	"target": "angularjs",
	"value": 39.37662666227728
	},
	{
	"source": "express",
	"target": "angularjs",
	"value": 24.43382880528071
	},
	{
	"source": "node.js",
	"target": "angularjs",
	"value": 47.56352702530362
	},
	{
	"source": "jquery",
	"target": "angularjs",
	"value": 30.34794743352026
	},
	{
	"source": "asp.net-web-api",
	"target": "angularjs",
	"value": 20.11309966430225
	},
	{
	"source": "angular2",
	"target": "angularjs",
	"value": 26.032697164489267
	},
	{
	"source": "html5",
	"target": "angularjs",
	"value": 23.082664020750425
	},
	{
	"source": "nginx",
	"target": "apache",
	"value": 48.583173464083416
	},
	{
	"source": "mysql",
	"target": "apache",
	"value": 29.097834547698525
	},
	{
	"source": "linux",
	"target": "apache",
	"value": 28.168213013158717
	},
	{
	"source": "scala",
	"target": "apache-spark",
	"value": 50.79184563415286
	},
	{
	"source": "hadoop",
	"target": "apache-spark",
	"value": 59.82678558413366
	},
	{
	"source": "rest",
	"target": "api",
	"value": 22.175589109335288
	},
	{
	"source": ".net",
	"target": "asp.net",
	"value": 48.40702996199019
	},
	{
	"source": "sql",
	"target": "asp.net",
	"value": 21.6722646057341
	},
	{
	"source": "sql-server",
	"target": "asp.net",
	"value": 59.67328948689907
	},
	{
	"source": "c#",
	"target": "asp.net",
	"value": 80.4485421720991
	},
	{
	"source": "asp.net-web-api",
	"target": "asp.net",
	"value": 47.38627215537402
	},
	{
	"source": "jquery",
	"target": "asp.net",
	"value": 28.723178220098205
	},
	{
	"source": "entity-framework",
	"target": "asp.net",
	"value": 48.1136690894626
	},
	{
	"source": "mvc",
	"target": "asp.net",
	"value": 22.828412163028812
	},
	{
	"source": "azure",
	"target": "asp.net",
	"value": 23.764072995058054
	},
	{
	"source": "wpf",
	"target": "asp.net",
	"value": 28.15902333873328
	},
	{
	"source": "linq",
	"target": "asp.net",
	"value": 31.581277746170855
	},
	{
	"source": "wcf",
	"target": "asp.net",
	"value": 40.95142172605998
	},
	{
	"source": "vb.net",
	"target": "asp.net",
	"value": 23.711346281144564
	},
	{
	"source": "asp.net",
	"target": "asp.net-web-api",
	"value": 47.38627215537402
	},
	{
	"source": "azure",
	"target": "asp.net-web-api",
	"value": 21.585694763313093
	},
	{
	"source": "c#",
	"target": "asp.net-web-api",
	"value": 26.748821548289044
	},
	{
	"source": "angularjs",
	"target": "asp.net-web-api",
	"value": 20.11309966430225
	},
	{
	"source": "sql-server",
	"target": "asp.net-web-api",
	"value": 25.67647418219353
	},
	{
	"source": "wcf",
	"target": "asp.net-web-api",
	"value": 28.356535431019818
	},
	{
	"source": "entity-framework",
	"target": "asp.net-web-api",
	"value": 31.18349509959109
	},
	{
	"source": ".net",
	"target": "azure",
	"value": 20.933192346640457
	},
	{
	"source": "c#",
	"target": "azure",
	"value": 22.14448701181891
	},
	{
	"source": "asp.net-web-api",
	"target": "azure",
	"value": 21.585694763313093
	},
	{
	"source": "asp.net",
	"target": "azure",
	"value": 23.764072995058054
	},
	{
	"source": "amazon-web-services",
	"target": "azure",
	"value": 21.30994959394633
	},
	{
	"source": "linux",
	"target": "bash",
	"value": 38.88811575032741
	},
	{
	"source": "shell",
	"target": "bash",
	"value": 24.71706557378606
	},
	{
	"source": "git",
	"target": "bash",
	"value": 27.096957129984922
	},
	{
	"source": "jquery",
	"target": "bootstrap",
	"value": 22.406154649004446
	},
	{
	"source": "css",
	"target": "bootstrap",
	"value": 24.71031260188158
	},
	{
	"source": "c++",
	"target": "c",
	"value": 80.89104614147385
	},
	{
	"source": "python",
	"target": "c",
	"value": 22.320432253935472
	},
	{
	"source": "embedded",
	"target": "c",
	"value": 28.403647769064776
	},
	{
	"source": "java",
	"target": "c",
	"value": 26.04945930410044
	},
	{
	"source": "linq",
	"target": "c#",
	"value": 25.222931643142886
	},
	{
	"source": "sql",
	"target": "c#",
	"value": 25.613903617043626
	},
	{
	"source": "asp.net",
	"target": "c#",
	"value": 80.4485421720991
	},
	{
	"source": "asp.net-web-api",
	"target": "c#",
	"value": 26.748821548289044
	},
	{
	"source": "entity-framework",
	"target": "c#",
	"value": 30.728425581793207
	},
	{
	"source": "vb.net",
	"target": "c#",
	"value": 25.185135956324604
	},
	{
	"source": ".net",
	"target": "c#",
	"value": 62.167895042923824
	},
	{
	"source": "sql-server",
	"target": "c#",
	"value": 45.91465123552504
	},
	{
	"source": "xamarin",
	"target": "c#",
	"value": 24.673147548722167
	},
	{
	"source": "azure",
	"target": "c#",
	"value": 22.14448701181891
	},
	{
	"source": "wpf",
	"target": "c#",
	"value": 38.95749217569616
	},
	{
	"source": "unity3d",
	"target": "c#",
	"value": 25.000233473145794
	},
	{
	"source": "wcf",
	"target": "c#",
	"value": 29.299880033528954
	},
	{
	"source": "visual-studio",
	"target": "c#",
	"value": 27.71554342863794
	},
	{
	"source": "qt",
	"target": "c++",
	"value": 30.144660032562147
	},
	{
	"source": "c",
	"target": "c++",
	"value": 80.89104614147385
	},
	{
	"source": "java",
	"target": "c++",
	"value": 23.201095658265963
	},
	{
	"source": "python",
	"target": "c++",
	"value": 24.301045666206715
	},
	{
	"source": "amazon-web-services",
	"target": "cloud",
	"value": 21.31860679884144
	},
	{
	"source": "mysql",
	"target": "codeigniter",
	"value": 22.596885929311604
	},
	{
	"source": "jquery",
	"target": "codeigniter",
	"value": 26.729771309673538
	},
	{
	"source": "laravel",
	"target": "codeigniter",
	"value": 31.658709317460826
	},
	{
	"source": "php",
	"target": "codeigniter",
	"value": 37.40149646160739
	},
	{
	"source": "ajax",
	"target": "codeigniter",
	"value": 23.19190040565183
	},
	{
	"source": "wordpress",
	"target": "codeigniter",
	"value": 25.13313076574851
	},
	{
	"source": "ajax",
	"target": "css",
	"value": 26.613713724688935
	},
	{
	"source": "mysql",
	"target": "css",
	"value": 27.010622489444646
	},
	{
	"source": "photoshop",
	"target": "css",
	"value": 20.855721424968042
	},
	{
	"source": "jquery",
	"target": "css",
	"value": 66.67420569975171
	},
	{
	"source": "html",
	"target": "css",
	"value": 126.57112712972764
	},
	{
	"source": "javascript",
	"target": "css",
	"value": 75.53660009612221
	},
	{
	"source": "html5",
	"target": "css",
	"value": 87.13826986156899
	},
	{
	"source": "bootstrap",
	"target": "css",
	"value": 24.71031260188158
	},
	{
	"source": "twitter-bootstrap",
	"target": "css",
	"value": 31.56405510257182
	},
	{
	"source": "less",
	"target": "css",
	"value": 25.340535324481124
	},
	{
	"source": "wordpress",
	"target": "css",
	"value": 31.264824668848835
	},
	{
	"source": "angularjs",
	"target": "css",
	"value": 22.210413043130057
	},
	{
	"source": "sass",
	"target": "css",
	"value": 40.96336126549837
	},
	{
	"source": "php",
	"target": "css",
	"value": 51.447604909108925
	},
	{
	"source": "amazon-web-services",
	"target": "devops",
	"value": 24.98353120101788
	},
	{
	"source": "docker",
	"target": "devops",
	"value": 24.554202817668248
	},
	{
	"source": "jenkins",
	"target": "devops",
	"value": 23.602587607535273
	},
	{
	"source": "python",
	"target": "django",
	"value": 49.905942953683244
	},
	{
	"source": "flask",
	"target": "django",
	"value": 42.33664313992495
	},
	{
	"source": "postgresql",
	"target": "django",
	"value": 22.48925264318247
	},
	{
	"source": "amazon-web-services",
	"target": "docker",
	"value": 32.198071014100535
	},
	{
	"source": "go",
	"target": "docker",
	"value": 28.375405907346195
	},
	{
	"source": "devops",
	"target": "docker",
	"value": 24.554202817668248
	},
	{
	"source": "jenkins",
	"target": "docker",
	"value": 26.528607599809522
	},
	{
	"source": "wordpress",
	"target": "drupal",
	"value": 24.919296182152596
	},
	{
	"source": "maven",
	"target": "eclipse",
	"value": 25.314659453818305
	},
	{
	"source": "redis",
	"target": "elasticsearch",
	"value": 29.349098676116647
	},
	{
	"source": "mongodb",
	"target": "elasticsearch",
	"value": 20.22800685545149
	},
	{
	"source": "c",
	"target": "embedded",
	"value": 28.403647769064776
	},
	{
	"source": ".net",
	"target": "entity-framework",
	"value": 24.37090250532431
	},
	{
	"source": "wpf",
	"target": "entity-framework",
	"value": 24.228201856682706
	},
	{
	"source": "asp.net",
	"target": "entity-framework",
	"value": 48.1136690894626
	},
	{
	"source": "sql-server",
	"target": "entity-framework",
	"value": 32.62377908692168
	},
	{
	"source": "linq",
	"target": "entity-framework",
	"value": 54.00592956009751
	},
	{
	"source": "wcf",
	"target": "entity-framework",
	"value": 32.81595165036012
	},
	{
	"source": "asp.net-web-api",
	"target": "entity-framework",
	"value": 31.18349509959109
	},
	{
	"source": "c#",
	"target": "entity-framework",
	"value": 30.728425581793207
	},
	{
	"source": "vba",
	"target": "excel",
	"value": 45.26074988295236
	},
	{
	"source": "excel-vba",
	"target": "excel",
	"value": 54.50523562629742
	},
	{
	"source": "vba",
	"target": "excel-vba",
	"value": 49.61621727834464
	},
	{
	"source": "excel",
	"target": "excel-vba",
	"value": 54.50523562629742
	},
	{
	"source": "reactjs",
	"target": "express",
	"value": 31.924272588963444
	},
	{
	"source": "redux",
	"target": "express",
	"value": 21.543458417676824
	},
	{
	"source": "angularjs",
	"target": "express",
	"value": 24.43382880528071
	},
	{
	"source": "node.js",
	"target": "express",
	"value": 58.829076622959285
	},
	{
	"source": "mongodb",
	"target": "express",
	"value": 48.76806081178149
	},
	{
	"source": "python",
	"target": "flask",
	"value": 25.251371861419308
	},
	{
	"source": "django",
	"target": "flask",
	"value": 42.33664313992495
	},
	{
	"source": "jenkins",
	"target": "git",
	"value": 23.075440145975143
	},
	{
	"source": "github",
	"target": "git",
	"value": 56.20246391729147
	},
	{
	"source": "bash",
	"target": "git",
	"value": 27.096957129984922
	},
	{
	"source": "linux",
	"target": "git",
	"value": 27.70879277472438
	},
	{
	"source": "git",
	"target": "github",
	"value": 56.20246391729147
	},
	{
	"source": "docker",
	"target": "go",
	"value": 28.375405907346195
	},
	{
	"source": "scala",
	"target": "hadoop",
	"value": 21.62593446217338
	},
	{
	"source": "apache-spark",
	"target": "hadoop",
	"value": 59.82678558413366
	},
	{
	"source": "scala",
	"target": "haskell",
	"value": 22.757440009799737
	},
	{
	"source": "jsp",
	"target": "hibernate",
	"value": 39.406945985510596
	},
	{
	"source": "java",
	"target": "hibernate",
	"value": 32.52356510452292
	},
	{
	"source": "spring-boot",
	"target": "hibernate",
	"value": 30.232903706376273
	},
	{
	"source": "maven",
	"target": "hibernate",
	"value": 34.100052024791246
	},
	{
	"source": "rest",
	"target": "hibernate",
	"value": 21.646667877763228
	},
	{
	"source": "web-services",
	"target": "hibernate",
	"value": 21.210956925188103
	},
	{
	"source": "spring-mvc",
	"target": "hibernate",
	"value": 64.10989821309226
	},
	{
	"source": "java-ee",
	"target": "hibernate",
	"value": 39.90817378554484
	},
	{
	"source": "spring",
	"target": "hibernate",
	"value": 103.26828446355263
	},
	{
	"source": "mysql",
	"target": "html",
	"value": 21.35568889023083
	},
	{
	"source": "javascript",
	"target": "html",
	"value": 59.75548884052987
	},
	{
	"source": "php",
	"target": "html",
	"value": 45.66104087971069
	},
	{
	"source": "css",
	"target": "html",
	"value": 126.57112712972764
	},
	{
	"source": "sass",
	"target": "html",
	"value": 23.639529235488705
	},
	{
	"source": "jquery",
	"target": "html",
	"value": 44.23362023021944
	},
	{
	"source": "php",
	"target": "html5",
	"value": 32.350506919162136
	},
	{
	"source": "wordpress",
	"target": "html5",
	"value": 22.216440754019796
	},
	{
	"source": "javascript",
	"target": "html5",
	"value": 47.00636375705097
	},
	{
	"source": "angularjs",
	"target": "html5",
	"value": 23.082664020750425
	},
	{
	"source": "less",
	"target": "html5",
	"value": 20.92318766828214
	},
	{
	"source": "twitter-bootstrap-3",
	"target": "html5",
	"value": 22.161036413455076
	},
	{
	"source": "jquery",
	"target": "html5",
	"value": 47.49277338891457
	},
	{
	"source": "css",
	"target": "html5",
	"value": 87.13826986156899
	},
	{
	"source": "twitter-bootstrap",
	"target": "html5",
	"value": 26.230983374393585
	},
	{
	"source": "sass",
	"target": "html5",
	"value": 32.070376656092115
	},
	{
	"source": "angularjs",
	"target": "ionic-framework",
	"value": 29.840445766924983
	},
	{
	"source": "android",
	"target": "ios",
	"value": 39.77803622570551
	},
	{
	"source": "swift",
	"target": "ios",
	"value": 87.21964246099864
	},
	{
	"source": "osx",
	"target": "ios",
	"value": 30.341581071883272
	},
	{
	"source": "objective-c",
	"target": "ios",
	"value": 78.75928046651394
	},
	{
	"source": "iphone",
	"target": "ios",
	"value": 57.15857405623158
	},
	{
	"source": "xcode",
	"target": "ios",
	"value": 46.36509077387072
	},
	{
	"source": "swift",
	"target": "iphone",
	"value": 36.02337467321895
	},
	{
	"source": "xcode",
	"target": "iphone",
	"value": 34.71286507120063
	},
	{
	"source": "ios",
	"target": "iphone",
	"value": 57.15857405623158
	},
	{
	"source": "objective-c",
	"target": "iphone",
	"value": 47.97788760375011
	},
	{
	"source": "spring",
	"target": "java",
	"value": 43.954259225314345
	},
	{
	"source": "c++",
	"target": "java",
	"value": 23.201095658265963
	},
	{
	"source": "jsp",
	"target": "java",
	"value": 21.619803035260286
	},
	{
	"source": "java-ee",
	"target": "java",
	"value": 25.116182820462374
	},
	{
	"source": "android",
	"target": "java",
	"value": 50.984730766476574
	},
	{
	"source": "hibernate",
	"target": "java",
	"value": 32.52356510452292
	},
	{
	"source": "c",
	"target": "java",
	"value": 26.04945930410044
	},
	{
	"source": "spring-mvc",
	"target": "java",
	"value": 25.041214810765112
	},
	{
	"source": "spring",
	"target": "java-ee",
	"value": 39.812105148516856
	},
	{
	"source": "hibernate",
	"target": "java-ee",
	"value": 39.90817378554484
	},
	{
	"source": "spring-mvc",
	"target": "java-ee",
	"value": 27.964591852574834
	},
	{
	"source": "java",
	"target": "java-ee",
	"value": 25.116182820462374
	},
	{
	"source": "jquery",
	"target": "javascript",
	"value": 57.84183152642191
	},
	{
	"source": "twitter-bootstrap",
	"target": "javascript",
	"value": 20.238823043724278
	},
	{
	"source": "node.js",
	"target": "javascript",
	"value": 42.73172932305638
	},
	{
	"source": "mysql",
	"target": "javascript",
	"value": 22.91619071652686
	},
	{
	"source": "angularjs",
	"target": "javascript",
	"value": 39.37662666227728
	},
	{
	"source": "php",
	"target": "javascript",
	"value": 47.3281575555596
	},
	{
	"source": "ajax",
	"target": "javascript",
	"value": 24.39914442262329
	},
	{
	"source": "reactjs",
	"target": "javascript",
	"value": 33.56735910485145
	},
	{
	"source": "css",
	"target": "javascript",
	"value": 75.53660009612221
	},
	{
	"source": "html",
	"target": "javascript",
	"value": 59.75548884052987
	},
	{
	"source": "sass",
	"target": "javascript",
	"value": 23.782469883653217
	},
	{
	"source": "html5",
	"target": "javascript",
	"value": 47.00636375705097
	},
	{
	"source": "git",
	"target": "jenkins",
	"value": 23.075440145975143
	},
	{
	"source": "devops",
	"target": "jenkins",
	"value": 23.602587607535273
	},
	{
	"source": "maven",
	"target": "jenkins",
	"value": 33.47708077913068
	},
	{
	"source": "docker",
	"target": "jenkins",
	"value": 26.528607599809522
	},
	{
	"source": "json",
	"target": "jquery",
	"value": 20.62957734085586
	},
	{
	"source": "html",
	"target": "jquery",
	"value": 44.23362023021944
	},
	{
	"source": "wordpress",
	"target": "jquery",
	"value": 28.87017059988903
	},
	{
	"source": "sass",
	"target": "jquery",
	"value": 24.68172813218768
	},
	{
	"source": "asp.net",
	"target": "jquery",
	"value": 28.723178220098205
	},
	{
	"source": "php",
	"target": "jquery",
	"value": 46.619090898232265
	},
	{
	"source": "css",
	"target": "jquery",
	"value": 66.67420569975171
	},
	{
	"source": "html5",
	"target": "jquery",
	"value": 47.49277338891457
	},
	{
	"source": "ajax",
	"target": "jquery",
	"value": 50.56672861589973
	},
	{
	"source": "twitter-bootstrap",
	"target": "jquery",
	"value": 36.79192549817867
	},
	{
	"source": "mysql",
	"target": "jquery",
	"value": 35.71297781108102
	},
	{
	"source": "angularjs",
	"target": "jquery",
	"value": 30.34794743352026
	},
	{
	"source": "twitter-bootstrap-3",
	"target": "jquery",
	"value": 21.153243249312748
	},
	{
	"source": "javascript",
	"target": "jquery",
	"value": 57.84183152642191
	},
	{
	"source": "codeigniter",
	"target": "jquery",
	"value": 26.729771309673538
	},
	{
	"source": "bootstrap",
	"target": "jquery",
	"value": 22.406154649004446
	},
	{
	"source": "rest",
	"target": "json",
	"value": 25.049498396111403
	},
	{
	"source": "jquery",
	"target": "json",
	"value": 20.62957734085586
	},
	{
	"source": "xml",
	"target": "json",
	"value": 42.721668458812765
	},
	{
	"source": "ajax",
	"target": "json",
	"value": 32.94744601093195
	},
	{
	"source": "hibernate",
	"target": "jsp",
	"value": 39.406945985510596
	},
	{
	"source": "java",
	"target": "jsp",
	"value": 21.619803035260286
	},
	{
	"source": "spring-mvc",
	"target": "jsp",
	"value": 24.06449025192885
	},
	{
	"source": "spring",
	"target": "jsp",
	"value": 30.61333985121873
	},
	{
	"source": "vue.js",
	"target": "laravel",
	"value": 28.79989665496036
	},
	{
	"source": "php",
	"target": "laravel",
	"value": 45.88473321024233
	},
	{
	"source": "mysql",
	"target": "laravel",
	"value": 20.23026605428928
	},
	{
	"source": "codeigniter",
	"target": "laravel",
	"value": 31.658709317460826
	},
	{
	"source": "sass",
	"target": "less",
	"value": 60.545941127987604
	},
	{
	"source": "css",
	"target": "less",
	"value": 25.340535324481124
	},
	{
	"source": "html5",
	"target": "less",
	"value": 20.92318766828214
	},
	{
	"source": "wcf",
	"target": "linq",
	"value": 34.58709265871981
	},
	{
	"source": "sql-server",
	"target": "linq",
	"value": 20.444792111689296
	},
	{
	"source": "c#",
	"target": "linq",
	"value": 25.222931643142886
	},
	{
	"source": "asp.net",
	"target": "linq",
	"value": 31.581277746170855
	},
	{
	"source": "entity-framework",
	"target": "linq",
	"value": 54.00592956009751
	},
	{
	"source": ".net",
	"target": "linq",
	"value": 20.501743858149066
	},
	{
	"source": "wpf",
	"target": "linq",
	"value": 26.468391555977576
	},
	{
	"source": "bash",
	"target": "linux",
	"value": 38.88811575032741
	},
	{
	"source": "git",
	"target": "linux",
	"value": 27.70879277472438
	},
	{
	"source": "unix",
	"target": "linux",
	"value": 25.357412874239948
	},
	{
	"source": "osx",
	"target": "linux",
	"value": 23.41281493970028
	},
	{
	"source": "ubuntu",
	"target": "linux",
	"value": 29.894342585346926
	},
	{
	"source": "shell",
	"target": "linux",
	"value": 21.131792917374074
	},
	{
	"source": "nginx",
	"target": "linux",
	"value": 21.080478447912995
	},
	{
	"source": "windows",
	"target": "linux",
	"value": 29.945400773839896
	},
	{
	"source": "python",
	"target": "linux",
	"value": 21.17036044400364
	},
	{
	"source": "apache",
	"target": "linux",
	"value": 28.168213013158717
	},
	{
	"source": "python",
	"target": "machine-learning",
	"value": 30.27077436735024
	},
	{
	"source": "r",
	"target": "machine-learning",
	"value": 23.21869703965049
	},
	{
	"source": "r",
	"target": "matlab",
	"value": 20.021932698311588
	},
	{
	"source": "spring-mvc",
	"target": "maven",
	"value": 24.933802259856545
	},
	{
	"source": "jenkins",
	"target": "maven",
	"value": 33.47708077913068
	},
	{
	"source": "eclipse",
	"target": "maven",
	"value": 25.314659453818305
	},
	{
	"source": "spring",
	"target": "maven",
	"value": 39.53022984092444
	},
	{
	"source": "hibernate",
	"target": "maven",
	"value": 34.100052024791246
	},
	{
	"source": "express",
	"target": "mongodb",
	"value": 48.76806081178149
	},
	{
	"source": "node.js",
	"target": "mongodb",
	"value": 58.65780661217398
	},
	{
	"source": "reactjs",
	"target": "mongodb",
	"value": 22.3209731892725
	},
	{
	"source": "postgresql",
	"target": "mongodb",
	"value": 22.855557000277642
	},
	{
	"source": "mysql",
	"target": "mongodb",
	"value": 26.36926476163211
	},
	{
	"source": "redis",
	"target": "mongodb",
	"value": 33.554731128787694
	},
	{
	"source": "elasticsearch",
	"target": "mongodb",
	"value": 20.22800685545149
	},
	{
	"source": "angularjs",
	"target": "mongodb",
	"value": 31.510711170360768
	},
	{
	"source": "asp.net",
	"target": "mvc",
	"value": 22.828412163028812
	},
	{
	"source": "css",
	"target": "mysql",
	"value": 27.010622489444646
	},
	{
	"source": "jquery",
	"target": "mysql",
	"value": 35.71297781108102
	},
	{
	"source": "mongodb",
	"target": "mysql",
	"value": 26.36926476163211
	},
	{
	"source": "laravel",
	"target": "mysql",
	"value": 20.23026605428928
	},
	{
	"source": "php",
	"target": "mysql",
	"value": 65.07025912410015
	},
	{
	"source": "postgresql",
	"target": "mysql",
	"value": 25.909942488756776
	},
	{
	"source": "javascript",
	"target": "mysql",
	"value": 22.91619071652686
	},
	{
	"source": "html",
	"target": "mysql",
	"value": 21.35568889023083
	},
	{
	"source": "ajax",
	"target": "mysql",
	"value": 24.80008942291756
	},
	{
	"source": "apache",
	"target": "mysql",
	"value": 29.097834547698525
	},
	{
	"source": "codeigniter",
	"target": "mysql",
	"value": 22.596885929311604
	},
	{
	"source": "linux",
	"target": "nginx",
	"value": 21.080478447912995
	},
	{
	"source": "redis",
	"target": "nginx",
	"value": 27.473141406934243
	},
	{
	"source": "apache",
	"target": "nginx",
	"value": 48.583173464083416
	},
	{
	"source": "javascript",
	"target": "node.js",
	"value": 42.73172932305638
	},
	{
	"source": "reactjs",
	"target": "node.js",
	"value": 55.192747551978705
	},
	{
	"source": "express",
	"target": "node.js",
	"value": 58.829076622959285
	},
	{
	"source": "angularjs",
	"target": "node.js",
	"value": 47.56352702530362
	},
	{
	"source": "mongodb",
	"target": "node.js",
	"value": 58.65780661217398
	},
	{
	"source": "react-native",
	"target": "node.js",
	"value": 22.16325031188543
	},
	{
	"source": "redux",
	"target": "node.js",
	"value": 23.40192325369395
	},
	{
	"source": "xcode",
	"target": "objective-c",
	"value": 43.41882511710604
	},
	{
	"source": "iphone",
	"target": "objective-c",
	"value": 47.97788760375011
	},
	{
	"source": "swift",
	"target": "objective-c",
	"value": 79.08853577916759
	},
	{
	"source": "ios",
	"target": "objective-c",
	"value": 78.75928046651394
	},
	{
	"source": "osx",
	"target": "objective-c",
	"value": 24.763189829170084
	},
	{
	"source": "sql",
	"target": "oracle",
	"value": 21.82760476470736
	},
	{
	"source": "plsql",
	"target": "oracle",
	"value": 45.06151433906438
	},
	{
	"source": "windows",
	"target": "osx",
	"value": 20.860246776482484
	},
	{
	"source": "objective-c",
	"target": "osx",
	"value": 24.763189829170084
	},
	{
	"source": "ios",
	"target": "osx",
	"value": 30.341581071883272
	},
	{
	"source": "linux",
	"target": "osx",
	"value": 23.41281493970028
	},
	{
	"source": "regex",
	"target": "perl",
	"value": 21.364077886249937
	},
	{
	"source": "css",
	"target": "photoshop",
	"value": 20.855721424968042
	},
	{
	"source": "css",
	"target": "php",
	"value": 51.447604909108925
	},
	{
	"source": "laravel",
	"target": "php",
	"value": 45.88473321024233
	},
	{
	"source": "wordpress",
	"target": "php",
	"value": 41.03704549651282
	},
	{
	"source": "jquery",
	"target": "php",
	"value": 46.619090898232265
	},
	{
	"source": "javascript",
	"target": "php",
	"value": 47.3281575555596
	},
	{
	"source": "ajax",
	"target": "php",
	"value": 28.01067925660409
	},
	{
	"source": "html",
	"target": "php",
	"value": 45.66104087971069
	},
	{
	"source": "mysql",
	"target": "php",
	"value": 65.07025912410015
	},
	{
	"source": "html5",
	"target": "php",
	"value": 32.350506919162136
	},
	{
	"source": "codeigniter",
	"target": "php",
	"value": 37.40149646160739
	},
	{
	"source": "oracle",
	"target": "plsql",
	"value": 45.06151433906438
	},
	{
	"source": "sql",
	"target": "plsql",
	"value": 22.717442387504864
	},
	{
	"source": "mysql",
	"target": "postgresql",
	"value": 25.909942488756776
	},
	{
	"source": "redis",
	"target": "postgresql",
	"value": 26.28018174137368
	},
	{
	"source": "ruby-on-rails",
	"target": "postgresql",
	"value": 25.69011032907274
	},
	{
	"source": "mongodb",
	"target": "postgresql",
	"value": 22.855557000277642
	},
	{
	"source": "django",
	"target": "postgresql",
	"value": 22.48925264318247
	},
	{
	"source": "ruby",
	"target": "postgresql",
	"value": 21.79517505760149
	},
	{
	"source": "windows",
	"target": "powershell",
	"value": 20.24069060325144
	},
	{
	"source": "flask",
	"target": "python",
	"value": 25.251371861419308
	},
	{
	"source": "c++",
	"target": "python",
	"value": 24.301045666206715
	},
	{
	"source": "machine-learning",
	"target": "python",
	"value": 30.27077436735024
	},
	{
	"source": "django",
	"target": "python",
	"value": 49.905942953683244
	},
	{
	"source": "c",
	"target": "python",
	"value": 22.320432253935472
	},
	{
	"source": "r",
	"target": "python",
	"value": 28.53574785327096
	},
	{
	"source": "linux",
	"target": "python",
	"value": 21.17036044400364
	},
	{
	"source": "c++",
	"target": "qt",
	"value": 30.144660032562147
	},
	{
	"source": "python",
	"target": "r",
	"value": 28.53574785327096
	},
	{
	"source": "matlab",
	"target": "r",
	"value": 20.021932698311588
	},
	{
	"source": "machine-learning",
	"target": "r",
	"value": 23.21869703965049
	},
	{
	"source": "reactjs",
	"target": "react-native",
	"value": 61.53102297253567
	},
	{
	"source": "redux",
	"target": "react-native",
	"value": 25.480581476491025
	},
	{
	"source": "node.js",
	"target": "react-native",
	"value": 22.16325031188543
	},
	{
	"source": "node.js",
	"target": "reactjs",
	"value": 55.192747551978705
	},
	{
	"source": "sass",
	"target": "reactjs",
	"value": 24.9979588147436
	},
	{
	"source": "react-native",
	"target": "reactjs",
	"value": 61.53102297253567
	},
	{
	"source": "redux",
	"target": "reactjs",
	"value": 65.12985505970208
	},
	{
	"source": "angularjs",
	"target": "reactjs",
	"value": 31.62020230471286
	},
	{
	"source": "mongodb",
	"target": "reactjs",
	"value": 22.3209731892725
	},
	{
	"source": "express",
	"target": "reactjs",
	"value": 31.924272588963444
	},
	{
	"source": "javascript",
	"target": "reactjs",
	"value": 33.56735910485145
	},
	{
	"source": "mongodb",
	"target": "redis",
	"value": 33.554731128787694
	},
	{
	"source": "nginx",
	"target": "redis",
	"value": 27.473141406934243
	},
	{
	"source": "elasticsearch",
	"target": "redis",
	"value": 29.349098676116647
	},
	{
	"source": "postgresql",
	"target": "redis",
	"value": 26.28018174137368
	},
	{
	"source": "reactjs",
	"target": "redux",
	"value": 65.12985505970208
	},
	{
	"source": "node.js",
	"target": "redux",
	"value": 23.40192325369395
	},
	{
	"source": "react-native",
	"target": "redux",
	"value": 25.480581476491025
	},
	{
	"source": "express",
	"target": "redux",
	"value": 21.543458417676824
	},
	{
	"source": "perl",
	"target": "regex",
	"value": 21.364077886249937
	},
	{
	"source": "spring",
	"target": "rest",
	"value": 26.11759862631264
	},
	{
	"source": "web-services",
	"target": "rest",
	"value": 33.69066907565828
	},
	{
	"source": "api",
	"target": "rest",
	"value": 22.175589109335288
	},
	{
	"source": "hibernate",
	"target": "rest",
	"value": 21.646667877763228
	},
	{
	"source": "json",
	"target": "rest",
	"value": 25.049498396111403
	},
	{
	"source": "postgresql",
	"target": "ruby",
	"value": 21.79517505760149
	},
	{
	"source": "ruby-on-rails",
	"target": "ruby",
	"value": 95.36131071220332
	},
	{
	"source": "postgresql",
	"target": "ruby-on-rails",
	"value": 25.69011032907274
	},
	{
	"source": "ruby",
	"target": "ruby-on-rails",
	"value": 95.36131071220332
	},
	{
	"source": "jquery",
	"target": "sass",
	"value": 24.68172813218768
	},
	{
	"source": "javascript",
	"target": "sass",
	"value": 23.782469883653217
	},
	{
	"source": "reactjs",
	"target": "sass",
	"value": 24.9979588147436
	},
	{
	"source": "html",
	"target": "sass",
	"value": 23.639529235488705
	},
	{
	"source": "html5",
	"target": "sass",
	"value": 32.070376656092115
	},
	{
	"source": "less",
	"target": "sass",
	"value": 60.545941127987604
	},
	{
	"source": "angularjs",
	"target": "sass",
	"value": 20.425878416671157
	},
	{
	"source": "css",
	"target": "sass",
	"value": 40.96336126549837
	},
	{
	"source": "twitter-bootstrap",
	"target": "sass",
	"value": 20.18548801090922
	},
	{
	"source": "hadoop",
	"target": "scala",
	"value": 21.62593446217338
	},
	{
	"source": "haskell",
	"target": "scala",
	"value": 22.757440009799737
	},
	{
	"source": "apache-spark",
	"target": "scala",
	"value": 50.79184563415286
	},
	{
	"source": "testing",
	"target": "selenium",
	"value": 33.685943095200074
	},
	{
	"source": "bash",
	"target": "shell",
	"value": 24.71706557378606
	},
	{
	"source": "linux",
	"target": "shell",
	"value": 21.131792917374074
	},
	{
	"source": "web-services",
	"target": "spring",
	"value": 20.16560629687762
	},
	{
	"source": "spring-mvc",
	"target": "spring",
	"value": 63.330217313152836
	},
	{
	"source": "rest",
	"target": "spring",
	"value": 26.11759862631264
	},
	{
	"source": "spring-boot",
	"target": "spring",
	"value": 57.04039265671136
	},
	{
	"source": "maven",
	"target": "spring",
	"value": 39.53022984092444
	},
	{
	"source": "java-ee",
	"target": "spring",
	"value": 39.812105148516856
	},
	{
	"source": "hibernate",
	"target": "spring",
	"value": 103.26828446355263
	},
	{
	"source": "jsp",
	"target": "spring",
	"value": 30.61333985121873
	},
	{
	"source": "java",
	"target": "spring",
	"value": 43.954259225314345
	},
	{
	"source": "spring",
	"target": "spring-boot",
	"value": 57.04039265671136
	},
	{
	"source": "hibernate",
	"target": "spring-boot",
	"value": 30.232903706376273
	},
	{
	"source": "spring-mvc",
	"target": "spring-boot",
	"value": 60.61682620955685
	},
	{
	"source": "maven",
	"target": "spring-mvc",
	"value": 24.933802259856545
	},
	{
	"source": "java-ee",
	"target": "spring-mvc",
	"value": 27.964591852574834
	},
	{
	"source": "spring",
	"target": "spring-mvc",
	"value": 63.330217313152836
	},
	{
	"source": "jsp",
	"target": "spring-mvc",
	"value": 24.06449025192885
	},
	{
	"source": "spring-boot",
	"target": "spring-mvc",
	"value": 60.61682620955685
	},
	{
	"source": "hibernate",
	"target": "spring-mvc",
	"value": 64.10989821309226
	},
	{
	"source": "java",
	"target": "spring-mvc",
	"value": 25.041214810765112
	},
	{
	"source": "plsql",
	"target": "sql",
	"value": 22.717442387504864
	},
	{
	"source": "sql-server",
	"target": "sql",
	"value": 24.354772917848095
	},
	{
	"source": "c#",
	"target": "sql",
	"value": 25.613903617043626
	},
	{
	"source": "oracle",
	"target": "sql",
	"value": 21.82760476470736
	},
	{
	"source": "asp.net",
	"target": "sql",
	"value": 21.6722646057341
	},
	{
	"source": "asp.net-web-api",
	"target": "sql-server",
	"value": 25.67647418219353
	},
	{
	"source": "wcf",
	"target": "sql-server",
	"value": 26.29146633095843
	},
	{
	"source": "vb.net",
	"target": "sql-server",
	"value": 21.788893442838376
	},
	{
	"source": ".net",
	"target": "sql-server",
	"value": 32.322524219339904
	},
	{
	"source": "entity-framework",
	"target": "sql-server",
	"value": 32.62377908692168
	},
	{
	"source": "asp.net",
	"target": "sql-server",
	"value": 59.67328948689907
	},
	{
	"source": "linq",
	"target": "sql-server",
	"value": 20.444792111689296
	},
	{
	"source": "sql",
	"target": "sql-server",
	"value": 24.354772917848095
	},
	{
	"source": "c#",
	"target": "sql-server",
	"value": 45.91465123552504
	},
	{
	"source": "xcode",
	"target": "swift",
	"value": 48.62033486702057
	},
	{
	"source": "iphone",
	"target": "swift",
	"value": 36.02337467321895
	},
	{
	"source": "objective-c",
	"target": "swift",
	"value": 79.08853577916759
	},
	{
	"source": "ios",
	"target": "swift",
	"value": 87.21964246099864
	},
	{
	"source": "agile",
	"target": "tdd",
	"value": 37.146589924204555
	},
	{
	"source": "selenium",
	"target": "testing",
	"value": 33.685943095200074
	},
	{
	"source": "angularjs",
	"target": "twitter-bootstrap",
	"value": 24.153685861107462
	},
	{
	"source": "html5",
	"target": "twitter-bootstrap",
	"value": 26.230983374393585
	},
	{
	"source": "sass",
	"target": "twitter-bootstrap",
	"value": 20.18548801090922
	},
	{
	"source": "jquery",
	"target": "twitter-bootstrap",
	"value": 36.79192549817867
	},
	{
	"source": "javascript",
	"target": "twitter-bootstrap",
	"value": 20.238823043724278
	},
	{
	"source": "css",
	"target": "twitter-bootstrap",
	"value": 31.56405510257182
	},
	{
	"source": "jquery",
	"target": "twitter-bootstrap-3",
	"value": 21.153243249312748
	},
	{
	"source": "html5",
	"target": "twitter-bootstrap-3",
	"value": 22.161036413455076
	},
	{
	"source": "angular2",
	"target": "typescript",
	"value": 38.87998222920348
	},
	{
	"source": "angular",
	"target": "typescript",
	"value": 31.03648178393663
	},
	{
	"source": "linux",
	"target": "ubuntu",
	"value": 29.894342585346926
	},
	{
	"source": "c#",
	"target": "unity3d",
	"value": 25.000233473145794
	},
	{
	"source": "linux",
	"target": "unix",
	"value": 25.357412874239948
	},
	{
	"source": "asp.net",
	"target": "vb.net",
	"value": 23.711346281144564
	},
	{
	"source": "sql-server",
	"target": "vb.net",
	"value": 21.788893442838376
	},
	{
	"source": "c#",
	"target": "vb.net",
	"value": 25.185135956324604
	},
	{
	"source": "excel-vba",
	"target": "vba",
	"value": 49.61621727834464
	},
	{
	"source": "excel",
	"target": "vba",
	"value": 45.26074988295236
	},
	{
	"source": "c#",
	"target": "visual-studio",
	"value": 27.71554342863794
	},
	{
	"source": "laravel",
	"target": "vue.js",
	"value": 28.79989665496036
	},
	{
	"source": ".net",
	"target": "wcf",
	"value": 28.074400427611113
	},
	{
	"source": "entity-framework",
	"target": "wcf",
	"value": 32.81595165036012
	},
	{
	"source": "c#",
	"target": "wcf",
	"value": 29.299880033528954
	},
	{
	"source": "sql-server",
	"target": "wcf",
	"value": 26.29146633095843
	},
	{
	"source": "wpf",
	"target": "wcf",
	"value": 53.17990345536856
	},
	{
	"source": "linq",
	"target": "wcf",
	"value": 34.58709265871981
	},
	{
	"source": "asp.net",
	"target": "wcf",
	"value": 40.95142172605998
	},
	{
	"source": "asp.net-web-api",
	"target": "wcf",
	"value": 28.356535431019818
	},
	{
	"source": "rest",
	"target": "web-services",
	"value": 33.69066907565828
	},
	{
	"source": "hibernate",
	"target": "web-services",
	"value": 21.210956925188103
	},
	{
	"source": "spring",
	"target": "web-services",
	"value": 20.16560629687762
	},
	{
	"source": "powershell",
	"target": "windows",
	"value": 20.24069060325144
	},
	{
	"source": "linux",
	"target": "windows",
	"value": 29.945400773839896
	},
	{
	"source": "osx",
	"target": "windows",
	"value": 20.860246776482484
	},
	{
	"source": "php",
	"target": "wordpress",
	"value": 41.03704549651282
	},
	{
	"source": "html5",
	"target": "wordpress",
	"value": 22.216440754019796
	},
	{
	"source": "css",
	"target": "wordpress",
	"value": 31.264824668848835
	},
	{
	"source": "codeigniter",
	"target": "wordpress",
	"value": 25.13313076574851
	},
	{
	"source": "drupal",
	"target": "wordpress",
	"value": 24.919296182152596
	},
	{
	"source": "jquery",
	"target": "wordpress",
	"value": 28.87017059988903
	},
	{
	"source": "linq",
	"target": "wpf",
	"value": 26.468391555977576
	},
	{
	"source": "wcf",
	"target": "wpf",
	"value": 53.17990345536856
	},
	{
	"source": "entity-framework",
	"target": "wpf",
	"value": 24.228201856682706
	},
	{
	"source": "c#",
	"target": "wpf",
	"value": 38.95749217569616
	},
	{
	"source": "asp.net",
	"target": "wpf",
	"value": 28.15902333873328
	},
	{
	"source": ".net",
	"target": "wpf",
	"value": 32.35092522005943
	},
	{
	"source": "c#",
	"target": "xamarin",
	"value": 24.673147548722167
	},
	{
	"source": "objective-c",
	"target": "xcode",
	"value": 43.41882511710604
	},
	{
	"source": "swift",
	"target": "xcode",
	"value": 48.62033486702057
	},
	{
	"source": "iphone",
	"target": "xcode",
	"value": 34.71286507120063
	},
	{
	"source": "ios",
	"target": "xcode",
	"value": 46.36509077387072
	},
	{
	"source": "json",
	"target": "xml",
	"value": 42.721668458812765
	}

  ];