import { UrlHandlingStrategy } from '@angular/router';

const NG2_URLS = [
    '/not-found',
    '/ng2-input'
];

export class HybridUrlHandlingStrategy implements UrlHandlingStrategy {
    shouldProcessUrl(url): boolean {
        return NG2_URLS.some(ng2url => url.toString().indexOf(ng2url) !== -1);
    }

    extract(url) {
        return url;
    }

    merge(url) {
        return url;
    }
}
