// node index.js --modo CLUSTER => PARA EJECUTAR 

// forever start index.js para hacer andar el forever

// forever list => para ver las lista de procesos activos

// ejecutar en powershell => tasklist /fi "imagename eq node.exe"

// pm2 start index.js --name="Server1" --watch -- PORT  => Ejecutar en Modo Fork pm2

// pm2 start index.js --name="Server2" --watch -i max -- PORT => Ejecutar en Modo Cluster pm2

// pm2 list => para listar en powershell

nginx.conf: 

http {
    server {
    	listen 8080;
        server_name my_server;
        
        location / { 
			proxy_pass http://localhost:8080; 
		}
		location /random { 
			proxy_pass http://localhost:8080/random; 
		}
	}
}
