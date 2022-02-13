import {IFacility} from "../service/IFacility";
import {ICustomer} from "../customer/icustomer";

export interface IContract {
  customer?: ICustomer;
  facility?: IFacility;
  dateStarted?: string;
  dateEnd?: string;
  downPayment?: number;
  totalPayment?: number;
}
