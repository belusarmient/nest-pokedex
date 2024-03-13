import { Module } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pokemon, PokemonSchema } from './entities/pokemon.entity';
import { Mongoose } from 'mongoose';

@Module({
  controllers: [PokemonController],
  providers: [PokemonService],
  imports: [MongooseModule.forFeature([
    {
      name: Pokemon.name, //el name no es la propiedad del pokemon como el id sino es de Document
      schema: PokemonSchema,

    }
  ])],
  exports: [MongooseModule]
})
export class PokemonModule {}
