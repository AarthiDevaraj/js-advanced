try {
  console.log(x);
} catch (e) {
  console.error(e.name);
} finally {
  console.log('Runs anyway');
}
