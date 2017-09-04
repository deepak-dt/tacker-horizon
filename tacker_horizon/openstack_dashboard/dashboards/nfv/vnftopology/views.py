# Copyright 2015 Brocade Communications System, Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License"); you may
# not use this file except in compliance with the License. You may obtain
# a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
# WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
# License for the specific language governing permissions and limitations
# under the License.


from django.core.urlresolvers import reverse
from django.core.urlresolvers import reverse_lazy
from django.utils.translation import ugettext_lazy as _

from horizon import exceptions
from horizon import forms
from horizon import tabs

from horizon.utils import memoized

from openstack_dashboard import api

from tacker_horizon.openstack_dashboard import api as tacker_api
from tacker_horizon.openstack_dashboard.dashboards.nfv.vnftopology \
    import tabs as nfv_tabs

from tacker_horizon.openstack_dashboard.dashboards.nfv.vnftopology \
    import forms as project_forms


class IndexView(tabs.TabbedTableView):
    # A very simple class-based view...
    tab_group_class = nfv_tabs.VNFCatalogTabs
    template_name = 'nfv/vnftopology/index.html'

    def get_data(self, request, context, *args, **kwargs):
        # Add data to the context here...
        return context
