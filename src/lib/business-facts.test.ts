import { describe, it, expect } from 'vitest';
import { BUSINESS, minimumFor, factualFaq, factualText } from './business-facts';
describe('Authoritative commercial rules', () => {
  for (const type of ['satin','nylon','bumbac']) it(`${type} minimum is 100`, () => expect(minimumFor(type)).toBe(100));
  it('woven minimum is 500 per model', () => expect(minimumFor('tesute')).toBe(500));
  it('children minimum is 50 per name', () => expect(minimumFor('copii')).toBe(50));
  it('stickers minimum is 500', () => expect(minimumFor('autocolante')).toBe(500));
  it('production starts with approved artwork', () => expect(BUSINESS.production).toBe('5–10 zile lucrătoare de la aprobarea bunului de tipar'));
  it('no invented minimum for carton', () => expect(minimumFor('carton')).toBeNull());
  it('stale FAQ price is removed', () => expect(factualFaq('Cât costă?', '0,15 RON/buc', '/etichete-satin')).not.toContain('0,15'));
});
it('normalization preserves authoritative delivery exactly',()=>expect(factualText(BUSINESS.production)).toBe(BUSINESS.production));
