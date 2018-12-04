import {Module, DynamicModule} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {configure as i18nConfigure} from 'i18n';
import {I18nOptions, i18nOptions} from './locales/configure';
import {DB_CONFIG} from './api.config';
// entities
import {Admin} from './entities/admin.entity';
import {Setting} from './entities/setting.entity';
import {Category} from './entities/category.entity';
import {Comment} from './entities/comment.entity';
import {Notice} from './entities/notice.entity';
import {Post} from './entities/post.entity';
import {Tag} from './entities/tag.entity';
import {Visitor} from './entities/visitor.entity';
// services
import {AdminService} from './services/admin.service';
import {AuthorizeService} from './services/authorize.service';
import {SettingService} from './services/setting.service';
import {CategoryService} from './services/category.service';
import {CommentService} from './services/comment.service';
import {EmailService} from './services/email.service';
import {NoticeService} from './services/notice.service';
import {PostService} from './services/post.service';
import {TagService} from './services/tag.service';
// controllers
import {AdminController} from './controllers/admin.controller';
import {CommentController} from './controllers/comment.controller';
import {CategoryController} from './controllers/category.controller';
import {CommonController} from './controllers/common.controller';
import {NoticeController} from './controllers/notice.controller';
import {PostController} from './controllers/post.controller';
import {SettingController} from './controllers/setting.controller';
import {TagController} from './controllers/tag.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot(DB_CONFIG),
    TypeOrmModule.forFeature([Admin, Setting, Category, Comment, Notice, Post, Tag, Visitor]),
  ],
  providers: [
    AuthorizeService,
    AdminService,
    SettingService,
    CategoryService,
    CommentService,
    EmailService,
    NoticeService,
    PostService,
    TagService
  ],
  controllers: [
    AdminController,
    CategoryController,
    CommentController,
    CommonController,
    NoticeController,
    PostController,
    SettingController,
    TagController
  ],
  exports: [],
})
export class ApiModule {
  static forRoot(options?: I18nOptions): DynamicModule {
    i18nConfigure({...i18nOptions, ...options});
    return {module: ApiModule};
  }
}
