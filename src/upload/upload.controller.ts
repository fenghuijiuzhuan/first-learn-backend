import {
  Body,
  Controller,
  FileTypeValidator,
  HttpException,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import {
  AnyFilesInterceptor,
  FileFieldsInterceptor,
  FileInterceptor,
  FilesInterceptor,
} from '@nestjs/platform-express';
import { storage } from './my-file-storage';
import { SizePipe } from './size.pipe';
import { MyFileValidator } from './my-file-validator';

@Controller('api/upload')
export class UploadController {
  // 单个上传
  @Post('aaa')
  @UseInterceptors(
    FileInterceptor('aaa', {
      dest: 'uploads',
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File, @Body() body) {
    console.log('body', body);
    console.log('file', file);
  }

  // 批量上传
  @Post('bbb')
  @UseInterceptors(
    FilesInterceptor('bbb', 3, {
      dest: 'uploads',
    }),
  )
  uploadFiles(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body() body,
  ) {
    console.log('body', body);
    console.log('files', files);
  }

  // 批量上传存在多个文件的字段
  @Post('ccc')
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'aaa', maxCount: 2 },
        { name: 'bbb', maxCount: 3 },
      ],
      {
        dest: 'uploads',
      },
    ),
  )
  uploadFilesManyKey(
    @UploadedFiles()
    files: { aaa?: Express.Multer.File[]; bbb?: Express.Multer.File[] },
    @Body() body,
  ) {
    console.log('body', body);
    console.log('files', files);
  }

  // 批量上传接受任意字段
  @Post('ddd')
  @UseInterceptors(
    AnyFilesInterceptor({
      dest: 'uploads',
    }),
  )
  uploadFilesAnyKey(
    @UploadedFiles()
    files: Express.Multer.File[],
    @Body() body,
  ) {
    console.log('body', body);
    console.log('files', files);
  }

  // 批量上传接受任意字段
  @Post('eee')
  @UseInterceptors(
    AnyFilesInterceptor({
      storage: storage,
    }),
  )
  uploadFilesAnyKeyStorage(
    @UploadedFiles()
    files: Express.Multer.File[],
    @Body() body,
  ) {
    console.log('body', body);
    console.log('files', files);
  }

  // 单个上传
  @Post('fff')
  @UseInterceptors(
    FileInterceptor('aaa', {
      dest: 'uploads',
    }),
  )
  uploadFileSize10k(
    @UploadedFile(SizePipe) file: Express.Multer.File,
    @Body() body,
  ) {
    console.log('body', body);
    console.log('file', file);
  }

  // 单个上传
  @Post('ggg')
  @UseInterceptors(
    FileInterceptor('aaa', {
      dest: 'uploads',
    }),
  )
  uploadFileSize10kPng(
    @UploadedFile(
      new ParseFilePipe({
        exceptionFactory: (err) => {
          throw new HttpException('xxx' + err, 404);
        },
        validators: [
          new MaxFileSizeValidator({ maxSize: 10 * 1024 }),
          new FileTypeValidator({ fileType: 'image/png' }),
        ],
      }),
    )
    file: Express.Multer.File,
    @Body() body,
  ) {
    console.log('body', body);
    console.log('file', file);
  }

  // 单个上传
  @Post('hhh')
  @UseInterceptors(
    FileInterceptor('aaa', {
      dest: 'uploads',
    }),
  )
  uploadFileSize10kCustonValidator(
    @UploadedFile(
      new ParseFilePipe({
        validators: [new MyFileValidator({})],
      }),
    )
    file: Express.Multer.File,
    @Body() body,
  ) {
    console.log('body', body);
    console.log('file', file);
  }
}
