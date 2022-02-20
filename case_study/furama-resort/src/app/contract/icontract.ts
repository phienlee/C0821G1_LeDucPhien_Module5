import {IFacility} from "../service/IFacility";
import {ICustomer} from "../customers/icustomer";

export interface IContract {
  customer?: ICustomer;
  dateStarted?: string;
  dateEnd?: string;
  downPayment?: number;
  totalPayment?: number;
}
