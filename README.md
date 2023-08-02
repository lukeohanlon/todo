# TODO

This is a simple todo app that allows users to create, update, and delete tasks.

## Technologies Used

- Frontend: React
- Backend: Node.js, Express, MongoDB
- CI/CD: CircleCI
- Cloud: AWS (Amazon Web Services)
- Containerization: Docker

## Installation

1. Clone the repository:
   \`git clone https://github.com/$GITHUB_USERNAME/$REPO_NAME.git\`
   \`cd $REPO_NAME\`

2. Install dependencies for frontend and backend:
   \`cd frontend\`
   \`npm install\`
   \`cd ../backend\`
   \`npm install\`

3. Start frontend development server
    - cd frontend
    - npm start

 4. Start backend development server
    - cd ../backend
    - npm start

## CI/CD Pipeline with CircleCI, AWS, and Docker

- Set up your CircleCI configuration in \`.circleci/config.yml\` to build and test your code on every push to the repository. Ensure CircleCI has access to your AWS credentials to deploy your app automatically.
- In your CircleCI configuration, define the deployment steps to AWS. For example, you can use AWS Elastic Beanstalk or other AWS services to deploy your frontend and backend.
- For containerization, create \`Dockerfile\` in the root of each folder (frontend and backend) to package your applications into Docker containers.
- Use AWS ECR (Elastic Container Registry) or any other container registry to host your Docker images.
- Configure CircleCI to build the Docker images and push them to the container registry.
- Add deployment steps in CircleCI to deploy your Docker images to AWS ECS (Elastic Container Service) or any other container orchestration service you prefer.
- Run your end-to-end tests in CircleCI to ensure everything works as expected.

## Contributing

- [Luke O'Hanlon](https://github.com/lukeohanlon)
- [Ken Sheridan](https://github.com/kensheridan)
- [Niamh Keegan](https://github.com/niamhkeegan)

## Contact

For any questions or suggestions, feel free to contact me at lukeohanlon@programmer.net.
