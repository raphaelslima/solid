export interface IndividualCustomerProtocol {
  firstName: string;
  lastName: string;
  cpf: string;
}

export interface EnterpriseCustomerProtocol {
  enterpriseName: string;
  cnpj: string;
}

export interface OrderCustomer {
  getName(): string;
  getIDN(): string;
}
