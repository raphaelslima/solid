import {
  IndividualCustomerProtocol,
  EnterpriseCustomerProtocol,
  OrderCustomer,
} from './interface/customer-protocol';

export class IndividualCustomer
  implements IndividualCustomerProtocol, OrderCustomer {
  constructor(
    public firstName: string,
    public lastName: string,
    public cpf: string,
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cpf = cpf;
  }

  getName(): string {
    return this.firstName;
  }

  getIDN(): string {
    return this.cpf;
  }
}
export class EnterpriseCustomer
  implements EnterpriseCustomerProtocol, OrderCustomer {
  constructor(public enterpriseName: string, public cnpj: string) {
    this.enterpriseName = enterpriseName;
    this.cnpj = cnpj;
  }

  getName(): string {
    return this.enterpriseName;
  }

  getIDN(): string {
    return this.cnpj;
  }
}
