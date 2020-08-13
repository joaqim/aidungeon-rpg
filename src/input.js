const modifier = (text) => {
  let modifiedText = text;
  const lowered = text.toLowerCase();

  var e = new entity("You", pronouns.you);
  var w = new entity("Merlin", pronouns.he);
  var l = new entity("Lucia", pronouns.she);

  var m = new entity("Murderbot", pronouns.it);

  console.log(e.attempt("strength", 1));
  console.log(e.attempt("intelligence", 10));

  console.log(w.attempt("intelligence", 1));
  console.log(w.attempt("luck", 1));
  console.log(w.attempt("intelligence", 10));

  console.log(l.attempt("intelligence", 1));
  console.log(l.attempt("intelligence", 10));

  console.log(m.attempt("intelligence", 1));
  console.log(m.attempt("intelligence", 10));

  return { text: modifiedText };
};

modifier(text);
