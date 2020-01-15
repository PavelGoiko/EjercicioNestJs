import { Controller, Get, Post, Param, Put, Body, Delete } from '@nestjs/common';
// import { Libro } from '/libro';

@Controller('libro')
export class LibroController {




    @Get()
    getAll() {
        return "Return all";
    }

    @Post('/add/:id')
    addAll(@Param() params) {
        return "Libro añadido" + params.id;
    }

    @Get('/:id')
    getOne(@Param() params) {
        return "Te devuelve solo un libro" + params.id;
    }

    @Put('/:id')
    update(@Param('id') id: number, @Body() params) {
        return `This action updates a #${id} object and name: ${params.name}`;
    }

    @Delete('/:id')
    remove(@Param('id') id: number) {
        return `This action removes a #${id} object`;
    }

}
