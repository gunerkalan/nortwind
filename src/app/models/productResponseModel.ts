import { ResponseModel } from "./responseModel";
import { Todo } from "./todo";

export interface ProductResponseModel extends ResponseModel{
  data:Todo[],

}
