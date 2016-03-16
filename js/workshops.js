// Generated by CoffeeScript 1.9.3
(function() {
  var add_date, add_description, add_header, add_links, add_logo, build_function, data_file;

  data_file = "data/workshops.yaml";

  add_logo = function(selection) {
    return selection.append("i").attr("class", "circle").text(function(d) {
      return d.number;
    });
  };

  add_header = function(selection) {
    var a, span;
    span = selection.append("span").attr("class", "title");
    a = span.append("a").attr("href", function(d) {
      return d.href;
    });
    a.attr("target", "_blank");
    return a.append("h5").text(function(d) {
      return d.name;
    });
  };

  add_date = function(selection) {
    var p;
    p = selection.append("p").attr("style", "font-size: 20px");
    return p.text(function(d) {
      return d.date;
    });
  };

  add_description = function(selection) {
    var p;
    p = selection.append("p").text(function(d) {
      return d.description;
    });
    return p.attr("style", "font-size: 20px; padding-top: 10px");
  };

  add_links = function(selection) {
    var a, i, p, subselection;
    subselection = selection.filter(function(d) {
      return "links" in d;
    });
    p = subselection.append("p").attr("style", "padding-top: 10px");
    a = p.selectAll().data(function(d) {
      return d.links;
    }).enter().append("a");
    a.attr("href", function(d) {
      return d.href;
    });
    a.attr("target", "_blank").attr("style", "padding-right: 10px");
    a.attr("title", "download pdf");
    return i = a.append("i").attr("class", "material-icons").text("file_download");
  };

  build_function = function(data_text) {
    var data, selection;
    data = jsyaml.load(data_text);
    selection = d3.select("#workshops").selectAll().data(data).enter().append("li").attr("class", "collection-item avatar light-green lighten-4");
    selection.attr("style", "border-color: transparent; border-bottom-style: none; margin-bottom: 5px;");
    selection = selection.sort();
    add_logo(selection);
    add_header(selection);
    add_date(selection);
    add_description(selection);
    return add_links(selection);
  };

  d3.text(data_file, build_function);

}).call(this);
