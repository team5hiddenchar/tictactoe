import { UpdateInfoRequest as UpdateInfoRequestInterface } from '../interfaces';
import { UpdateInfoRequestForm as UpdateInfoRequestInterfaceForm } from '../interfaces';
import { IsNotEmpty, IsString, MaxLength, MinLength, Min, Max,  ValidateIf, Equals} from 'class-validator';


export class UpdateInfoRequest implements UpdateInfoRequestInterface {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  name: string;
}

export class UpdateInfoRequestForm implements UpdateInfoRequestInterfaceForm  {
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(15)
  name: string;

  @IsNotEmpty()
  @Min(1)
  @Max(150)
  age: Number;

  @IsNotEmpty()
  bdate: string;

  @ValidateIf(o => o.age >= 18)
  @IsNotEmpty()
  socialStatus: string;

  @Equals(ValidadeAge(UpdateInfoRequestForm) !== true)
  validate: boolean;
}





function calculateAge(bdate: any): number {
  const bdateAsDate = new Date(bdate);
  const diff = Date.now() - bdateAsDate.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}

function ValidadeAge ( UpdateInfoRequestForm )  {
  return calculateAge(UpdateInfoRequestForm.bdate) == UpdateInfoRequestForm.age;
} 
