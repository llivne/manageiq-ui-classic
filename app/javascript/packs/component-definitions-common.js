import React from 'react';

import { TagGroup, TableListView, GenericGroup } from '../components/textual_summary';
import { Quadicon } from '../components/quadicon';
import { Toolbar } from '../components/toolbar';

import AggregateStatusCard from '../components/aggregate_status_card';
import AnsibleCredentialsForm from '../components/ansible-credentials-form';
import AuthKeypairCloudForm from '../components/auth-key-pair-cloud';
import { BreadcrumbsBar } from '../components/breadcrumbs';
import CatalogForm from '../components/catalog-form/catalog-form';
import CloudNetworkForm from '../components/cloud-network-form/cloud-network-form';
import CloudTenantForm from '../components/cloud-tenant-form';
import CloudVolumeForm from '../components/cloud-volume-form';
import ProviderForm from '../components/provider-form';
import CopyCatalogForm from '../components/copy-catalog-form/copy-catalog-form';
import CopyDashboardForm from '../components/copy-dashboard-form/copy-dashboard-form';
import DashboardWidget from '../components/dashboard-charts';
import FlavorForm from '../components/flavor-form';
import FirmwareRegistryForm from '../components/firmware-registry/firmware-registry-form';
import FormButtonsRedux from '../forms/form-buttons-redux';
import GenericGroupWrapper from '../react/generic_group_wrapper';
import GtlView from  '../components/gtl-view';
import { TreeViewRedux } from '../components/tree-view';
import FonticonPicker from '../components/fonticon-picker';
import ImportDatastoreViaGit from '../components/automate-import-export-form/import-datastore-via-git';
import MiqAboutModal from '../components/miq-about-modal';
import MiqToolbar from '../components/miq-toolbar';
import { MainMenu, Navbar } from '../menu';
import NotificationDrawer from '../components/notification-drawer/notification-drawer';
import OptimizationList from '../optimization/optimization_list';
import OpsTenantForm from '../components/ops-tenant-form/ops-tenant-form';
import OrcherstrationTemplateForm from '../components/orchestration-template/orcherstration-template-form';
import PxeImageForm from '../components/pxe-image-type-form';
import PxeCustomizationTemplateForm from '../components/pxe-customization-template-form';
import PxeServersForm from '../components/pxe-servers-form/pxe-server-form';
import PerformanceChartWidget from '../components/performance-charts';
import PodsTrendChart from '../components/provider-dashboard-charts/pod-trend-charts';
import RecentHostGraph from '../components/provider-dashboard-charts/recent-host-chart';
import RecentVmGraph from '../components/provider-dashboard-charts/recent-vm-chart';
import RefreshDataNotification from '../components/refresh-data-notification';
import RegionForm from '../components/region-form';
import RemoveCatalogItemModal from '../components/remove-catalog-item-modal';
import RemoveGenericItemModal from '../components/remove-generic-item-modal';
import ReportChartWidget from '../components/create-report-chart-form';
import ReportDataTable from '../components/report-data-table';
import RetirementForm from '../components/retirement-form';
import ServiceDialogFromForm from '../components/service-dialog-from-form/service-dialog-from';
import EditServiceForm from '../components/edit-service-form';
import SetOwnershipForm from '../components/set-ownership-form';
import ServersDataChart from '../components/provider-dashboard-charts/servers-pie-chart';
import TableListViewWrapper from '../react/table_list_view_wrapper';
import TaggingWrapperConnected from '../components/taggingWrapper';
import { TagView } from '../tagging';
import ToastList from '../components/toast-list/toast-list';
import TextualSummaryWrapper from '../react/textual_summary_wrapper';
import UsageTrendChart from '../components/provider-dashboard-charts/usage-network-image-charts';
import UtilizationChartGraph from '../components/provider-dashboard-charts/provider-dashboard-utilization-chart';
import VmServerRelationshipForm from '../components/vm-server-relationship-form';
import VmSnapshotForm from '../components/vm-snapshot-form/vm-snapshot-form';
import WorkersForm from '../components/workers-form/workers-form';
import PhysicalStorageForm from '../components/physical-storage-form';
import VisualSettingsForm from '../components/visual-settings-form';
import HostInitiatorForm from '../components/host-initiator-form';
import VolumeMappingForm from '../components/volume-mapping-form';

/**
* Add component definitions to this file.
* example of component definition:
* ManageIQ.component.addReact('ComponentName', props => <ComponentName {...props} />);
*/

ManageIQ.component.addReact('AggregateStatusCard', AggregateStatusCard);
ManageIQ.component.addReact('AnsibleCredentialsForm', AnsibleCredentialsForm);
ManageIQ.component.addReact('AuthKeypairCloudForm', AuthKeypairCloudForm);
ManageIQ.component.addReact('BreadcrumbsBar', BreadcrumbsBar);
ManageIQ.component.addReact('CatalogForm', CatalogForm);
ManageIQ.component.addReact('CloudNetworkForm', CloudNetworkForm);
ManageIQ.component.addReact('CloudTenantForm', CloudTenantForm);
ManageIQ.component.addReact('CloudVolumeForm', CloudVolumeForm);
ManageIQ.component.addReact('ProviderForm', ProviderForm);
ManageIQ.component.addReact('CopyCatalogForm', CopyCatalogForm);
ManageIQ.component.addReact('CopyDashboardForm', CopyDashboardForm);
ManageIQ.component.addReact('DashboardWidget', DashboardWidget);
ManageIQ.component.addReact('FirmwareRegistryForm', FirmwareRegistryForm);
ManageIQ.component.addReact('FlavorForm', FlavorForm);
ManageIQ.component.addReact('FormButtonsRedux', FormButtonsRedux);
ManageIQ.component.addReact('GenericGroup', GenericGroup);
ManageIQ.component.addReact('GenericGroupWrapper', GenericGroupWrapper);
ManageIQ.component.addReact('GtlView', GtlView);
ManageIQ.component.addReact('TreeViewRedux', TreeViewRedux);
ManageIQ.component.addReact('FonticonPicker', FonticonPicker);
ManageIQ.component.addReact('ImportDatastoreViaGit', ImportDatastoreViaGit);
ManageIQ.component.addReact('MiqAboutModal', MiqAboutModal);
ManageIQ.component.addReact('MiqToolbar', MiqToolbar);
ManageIQ.component.addReact('menu.MainMenu', MainMenu);
ManageIQ.component.addReact('menu.Navbar', Navbar);
ManageIQ.component.addReact('NotificationDrawer', NotificationDrawer);
ManageIQ.component.addReact('OpsTenantForm', OpsTenantForm);
ManageIQ.component.addReact('OptimizationList', OptimizationList);
ManageIQ.component.addReact('OrcherstrationTemplateForm', OrcherstrationTemplateForm);
ManageIQ.component.addReact('PxeImageForm', PxeImageForm);
ManageIQ.component.addReact('PxeCustomizationTemplateForm', PxeCustomizationTemplateForm);
ManageIQ.component.addReact('PxeServersForm', PxeServersForm);
ManageIQ.component.addReact('PerformanceChartWidget', PerformanceChartWidget);
ManageIQ.component.addReact('PodsTrendChart', PodsTrendChart);
ManageIQ.component.addReact('Quadicon', Quadicon);
ManageIQ.component.addReact('RecentHostGraph', RecentHostGraph);
ManageIQ.component.addReact('RecentVmGraph', RecentVmGraph);
ManageIQ.component.addReact('RefreshDataNotification', RefreshDataNotification);
ManageIQ.component.addReact('RegionForm', RegionForm);
ManageIQ.component.addReact('RemoveCatalogItemModal', RemoveCatalogItemModal);
ManageIQ.component.addReact('RemoveGenericItemModal', RemoveGenericItemModal);
ManageIQ.component.addReact('ReportChartWidget', ReportChartWidget);
ManageIQ.component.addReact('ReportDataTable', ReportDataTable);
ManageIQ.component.addReact('RetirementForm', RetirementForm);
ManageIQ.component.addReact('ServiceDialogFromForm', ServiceDialogFromForm);
ManageIQ.component.addReact('EditServiceForm', EditServiceForm);
ManageIQ.component.addReact('SetOwnershipForm', SetOwnershipForm);
ManageIQ.component.addReact('ServersDataChart', ServersDataChart);
ManageIQ.component.addReact('TableListView', TableListView);
ManageIQ.component.addReact('TableListViewWrapper', TableListViewWrapper);
ManageIQ.component.addReact('TagGroup', props => <TagGroup {...props} />);
ManageIQ.component.addReact('TagView', TagView);
ManageIQ.component.addReact('TaggingWrapperConnected', TaggingWrapperConnected);
ManageIQ.component.addReact('TextualSummaryWrapper', TextualSummaryWrapper);
ManageIQ.component.addReact('ToastList', ToastList);
ManageIQ.component.addReact('Toolbar', Toolbar);
ManageIQ.component.addReact('UsageTrendChart', UsageTrendChart);
ManageIQ.component.addReact('UtilizationChartGraph', UtilizationChartGraph);
ManageIQ.component.addReact('VmServerRelationshipForm', VmServerRelationshipForm);
ManageIQ.component.addReact('VmSnapshotForm', VmSnapshotForm);
ManageIQ.component.addReact('WorkersForm', WorkersForm);
ManageIQ.component.addReact('PhysicalStorageForm', PhysicalStorageForm);
ManageIQ.component.addReact('VisualSettingsForm', VisualSettingsForm);
ManageIQ.component.addReact('HostInitiatorForm', HostInitiatorForm);
ManageIQ.component.addReact('VolumeMappingForm', VolumeMappingForm);
