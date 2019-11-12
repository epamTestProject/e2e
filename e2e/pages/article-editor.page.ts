import {$, browser, ElementFinder} from 'protractor';

export class ArticleEditorPage {
  public articleTitleField: ElementFinder;
  public articleDescriptionField: ElementFinder;
  public articleBodyField: ElementFinder;
  public articleTags: ElementFinder;
  public publishArticleButton: ElementFinder;

  public constructor() {
    this.articleTitleField = $('[formcontrolname=title]');
    this.articleDescriptionField = $('[formcontrolname=description]');
    this.articleBodyField = $('[formcontrolname=body]');

  }

  public getPage(): Promise<any> {
    return browser.get('/editor') as Promise<any>;
  }
}
