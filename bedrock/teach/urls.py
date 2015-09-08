# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

from django.conf.urls import patterns

from bedrock.redirects.util import redirect
from bedrock.mozorg.util import page


urlpatterns = patterns('',
    # There will eventually be a main education landing page
    # but we'll redirect until then.
    redirect(r'^teach/$', 'teach.smarton.index', name='teach'),

    # SmartOn
    page('teach/smarton', 'teach/smarton/index.html'),
    page('teach/smarton/privacy', 'teach/smarton/privacy.html'),
    page('teach/smarton/security', 'teach/smarton/security.html'),
    page('teach/smarton/surveillance', 'teach/smarton/surveillance.html'),
)
