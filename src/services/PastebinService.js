export default class PastebinService {

  static async createPaste (code, filename = 'siql-file', expireDate = '1M') {
    try {
      let resp = await fetch('https://myboxss.000webhostapp.com/pastebin/create', {
        method: 'POST',
        body: JSON.stringify({
          code,
          private: "0",
          filename: filename + '.sql',
          expire_date: expireDate, // 1M= one month, 1Y= one year, N= never
          format: "sql"
        })
      });

      resp = await resp.text();

      if (resp === 'Bad API request, invalid login') {
        throw new Error('Bad API request, invalid login');
      }

      return resp;
    } catch (error) {
      return error.message;
    }
  }
}