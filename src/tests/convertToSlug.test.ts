import { transliterateToLatin } from '../utils/convertToSlug';

describe('TransliterateToLatin', () => {
  it('1', () => {
    const result = transliterateToLatin('Тестовое название поста');
    expect(result).toEqual('testovoe_nazvanie_posta');
  });
  it('2', () => {
    const result = transliterateToLatin(
      'О чем молчат в автошколах: руководство для водителей-новичков 54'
    );
    expect(result).toEqual(
      'o_chem_molchat_v_avtoshkolakh_rukovodstvo_dlya_voditeley-novichkov_54'
    );
  });
  it('3', () => {
    const result = transliterateToLatin('test post name');
    expect(result).toEqual('test_post_name');
  });
});
