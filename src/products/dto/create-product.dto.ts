import {IsNumber, IsPositive, IsString, MinLength} from "class-validator"
export class CreateProductDto {
    @IsString()
    @MinLength(3)
    title: string;

    @IsString()
    @MinLength(5)
    description: string;

    @IsNumber()
    @IsPositive()
    price: number;
}