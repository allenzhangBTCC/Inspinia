angular.module("envconfig", [])

.constant("ENV", {
	"mainServer": "http://localhost:7000",
	"storageServer": "http://localhost:3010/",
	"apiServer": "http://localhost:3010/api"
})

;