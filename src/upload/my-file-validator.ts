import { FileValidator } from '@nestjs/common';

export class MyFileValidator extends FileValidator {
  constructor(options) {
    super(options);
  }

  isValid(file?: Express.Multer.File): boolean | Promise<boolean> {
    if (file.size > 1024 * 10) {
      return false;
    }
    return true;
  }

  buildErrorMessage(file: Express.Multer.File): string {
    return `文件 ${file.originalname} 文件大小超出10k`;
  }
}
