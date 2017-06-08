start:
	docker-compose up -d

stop:
	docker-compose down

dlogs:
	docker-compose logs -f

shell:
	docker-compose exec app bash

restart: stop start
