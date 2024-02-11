export class UserDto {
  /**
   * メールアドレス
   * @example taro@example.com
   */
  email: string;

  /**
   * 作成日時
   */
  createdAt: Date;

  /**
   * 更新日時
   */
  updatedAt: Date;

  constructor(partial: Partial<UserDto>) {
    Object.assign(this, partial);
  }
}
