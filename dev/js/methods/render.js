export default (data, template) => {
  let render = MicroTemplate(template);

  function MicroTemplate(template) {
    return new Function(
      "data",
      "var output=" +
      JSON.stringify(template)
      .replace(/{{ (.+?) }}/g, '"+($1)+"')
      .replace(/{%(.+?)%}/g, '";$1\noutput+="') +
      ";return output;"
    );
  }
  return render(data);
}