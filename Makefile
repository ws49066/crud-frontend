deploy-test:
	docker build -t crud-frontend:test .
	docker-compose -f composes/crud-frontend-test/docker-compose.yaml up -d
