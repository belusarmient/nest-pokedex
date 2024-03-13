import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { isValidObjectId } from 'mongoose';
@Injectable()
export class ParseMongoIdPipe implements PipeTransform{
    transform(value: any, metadata: ArgumentMetadata) {
        if(!isValidObjectId(value)) throw new BadRequestException('Is not valid mongo ID');
        return value;
    }

}