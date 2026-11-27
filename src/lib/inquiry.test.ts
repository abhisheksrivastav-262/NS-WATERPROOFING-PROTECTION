import { describe, expect, it } from 'vitest';
import { GUARANTEE_YEARS, PHONE, SERVICE_AREAS, inquiryLink } from './inquiry';
describe('Business contact rules', () => {
  it('uses the supplied phone number', () => expect(PHONE).toBe('8877557748'));
  it('sends all inquiry details to the supplied Indian WhatsApp number', () => {
    const url = new URL(inquiryLink({name: 'Anita', mobile: '9876543210', location: 'Patna', service: 'Terrace Waterproofing', message: 'Roof leak'}));
    expect(url.pathname).toBe('/918877557748');
    const text = url.searchParams.get('text');
    for (const value of ['Anita', '9876543210', 'Patna', 'Terrace Waterproofing', 'Roof leak']) expect(text).toContain(value);
  });
  it('keeps the stated guarantee at five years', () => expect(GUARANTEE_YEARS).toBe(5));
  it('limits stated service regions to Bihar and Jharkhand', () => expect(SERVICE_AREAS).toEqual(['Bihar', 'Jharkhand']));
});