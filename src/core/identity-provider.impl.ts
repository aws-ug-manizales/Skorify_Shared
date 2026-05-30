import { IdentityProviderContract } from "@skorify/domain/user";
import {
  CognitoIdentityProviderClient,
  SignUpCommand,
} from "@aws-sdk/client-cognito-identity-provider";
export class IdentityProviderImpl extends IdentityProviderContract {
  constructor(
    public client: CognitoIdentityProviderClient,
    public clientId: string,
  ) {
    super();
  }

  async update(
    userId: string,
    password: string,
    data: {
      name: string;
      email: string;
    },
  ): Promise<void> {
    const { name, email } = data;
    const command = new SignUpCommand({
      ClientId: this.clientId,
      Username: email,
      Password: password,
      UserAttributes: [
        {
          Name: "email",
          Value: email,
        },
        {
          Name: "userId",
          Value: userId,
        },
        {
          Name: "name",
          Value: name,
        },
      ],
    });

    const response = await this.client.send(command);

    console.log(response);
  }
}
