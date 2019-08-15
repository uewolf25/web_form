function doGet() {
  var template = HtmlService.createTemplateFromFile('form_exam');
  template.name = 'うえ様';
  template.mail = 'yuto643';
  
  return template.evaluate();
}
