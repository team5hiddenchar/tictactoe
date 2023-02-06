import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { UpdateInfoRequest as UpdateInfoRequestInterface, UpdateInfoRequestForm as UpdateInfoRequestInterfaceForm  } from './interfaces';
import { BaseResponse } from '../interfaces';
import { UpdateInfoRequest, UpdateInfoRequestForm} from './models';

@Injectable()
export class InfoService {
  async validateInfo(
    rawData: UpdateInfoRequestInterface,
  ): Promise<BaseResponse> {
    const data = plainToClass(UpdateInfoRequest, rawData);
    const validationErrors = await validate(data);
    if (validationErrors.length > 0) {
      return {
        success: false,
        errors: validationErrors,
      };
    }
    return {
      success: true,
      data,
    };
  }

  async validateForm(
    rawData: UpdateInfoRequestInterfaceForm,
  ): Promise<BaseResponse> {
    const data = plainToClass(UpdateInfoRequestForm, rawData);
    const validationErrors = await validate(data);
    if (validationErrors.length > 0) {
      return {
        success: false,
        errors: validationErrors,
      };
    }
    return {
      success: true,
      data,
    };
  }
}


