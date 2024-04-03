import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/index'));
const Vendors = React.lazy(() => import('./views/vendors/index'));

const VendorCarType = React.lazy(() => import('./views/vendors/cartype'));

const VendorCarTypeCharges = React.lazy(() => import('./views/vendors/car_type_charges'));
const Checkout = React.lazy(() => import('./views/checkout/checkout'));
const CheckoutReceipt = React.lazy(() => import('./views/checkout/checkout_receipt'));
const CheckoutReceipts = React.lazy(() => import('./views/checkout/checkout_receipt_final'));
const AddVendor = React.lazy(() => import('./views/vendors/add_vendor'));
const Settings = React.lazy(() => import('./views/settings/index'));
const Reports = React.lazy(() => import('./views/reports/index'));
const Users = React.lazy(() => import('./views/users/index'));
const AddUser = React.lazy(() => import('./views/users/add_user'));
const Policies = React.lazy(() => import('./views/settings/policies'));

const CheckoutVendors = React.lazy(() => import('./views/checkout/index'));
const VendorPlateName = React.lazy(() => import('./views/checkout/platename'));
const VendorCarTypes = React.lazy(() => import('./views/checkout/cartype'));
const ReservationDate = React.lazy(() => import('./views/checkout/reservation_date'));
const ReservationTime = React.lazy(() => import('./views/checkout/reservation_time'));
const PickupDate = React.lazy(() => import('./views/checkout/pickup_date'));
const PickupTime = React.lazy(() => import('./views/checkout/pickup_time'));
const CheckoutSearch = React.lazy(() => import('./views/checkout/checkout_search'))
const CheckoutModify = React.lazy(() => import('./views/checkout/checkout_modify'))
const ParkingBlock = React.lazy(() => import('./views/checkout/parkingblock'));

const CheckoutReview = React.lazy(() => import('./views/checkout/review_checkin'))

const RevenueReports = React.lazy(() => import('./views/reports/revenue'));
const InventoryReports = React.lazy(() => import('./views/reports/inventory'));
const CarmovementReports = React.lazy(() => import('./views/reports/carmovement'));
const LotDiagram = React.lazy(() => import('./views/diagram/index'));
const Slots = React.lazy(() => import('./views/slots/index'));
const CarStatus = React.lazy(() => import('./views/checkout/car_status'));
const UploadCsv = React.lazy(() => import('./views/settings/upload-csv'));
const routes = [
  /***********************Vendors Section******************************/
  { path: '/vendors/list', name: 'Vendors', component: Vendors, exact: true },
  { path: '/vendors/add', name: 'Add vendor', component: AddVendor, exact: true },
  { path: '/vendors/edit/:id', name: 'Edit vendor', component: AddVendor },
  /***********************Dashboard Section******************************/
  { path: '/dashboard', name: 'Dashboard', component: Dashboard, exact: true },
  { path: '/checkout/vendors', name: 'Select Vendor name', component: CheckoutVendors, exact: true },
  { path: '/checkout/plate_name/:id', name: 'Select Plate Name', component: VendorPlateName},
  { path: '/checkout/plate_name', name: 'Select Plate Name', component: VendorPlateName},
  { path: '/checkout/car_types', name: 'Select car type', component: VendorCarTypes},
  { path: '/checkout/parkingblock', name: 'Select parking block', component: ParkingBlock},
  { path: '/checkout/reservation_date', name: 'Select reservation date', component: ReservationDate},
  { path: '/checkout/reservation_time', name: 'Select reservation time', component: ReservationTime},
  { path: '/checkout/pickup_date', name: 'Select pickup date', component: PickupDate},
  { path: '/checkout/pickup_time', name: 'Select pickup time', component: PickupTime},
  { path: '/checkout/checkout/:id', name: 'Checkout', component: Checkout },
  { path: '/checkout/checkout_review/:id', name: 'Checkin Review', component: CheckoutReview },
  { path: '/checkout/checkout_receipt/:id', name: 'Checkin Receipt', component: CheckoutReceipt },
  { path: '/checkout/search', name: 'Checkout Search', component: CheckoutSearch },
  { path: '/checkout/modify', name: 'Checkout Search', component: CheckoutModify },
  { path: '/checkout/checkoutReceipt/:id', name: 'Checkout Receipt', component: CheckoutReceipts },
  { path: '/car_Status/list', name: 'Car Status Receipt', component: CarStatus },
  

  /***************************Car type Section******************************/
  { path: '/car_types/list', name: 'Car types', component: VendorCarType, exact: true },
  { path: '/car_types/add', name: 'Add car type', component: VendorCarTypeCharges, exact: true },
  { path: '/car_types/edit/:id', name: 'Edit car type', component: VendorCarTypeCharges, },

 /***************************Parking Section******************************/
 { path: '/diagram/lots', name: 'Parkings lots', component: LotDiagram, exact: true },

  /***************************Slot Section******************************/
  { path: '/slot/list', name: 'Slot lots', component: Slots, exact: true },

  /***************************Reports Section******************************/
  { path: '/reports/list', name: 'Reports', component: Reports, exact: true },
  { path: '/reports/revenue', name: 'Revenue Reports', component: RevenueReports, exact: true },
  { path: '/reports/carmovement', name: 'Carmovement Reports', component: CarmovementReports, exact: true },
  { path: '/reports/inventory', name: 'Inventory Reports', component: InventoryReports, exact: true },
  /***************************Settings Section******************************/
  { path: '/settings', name: 'Settings', component: Settings, exact: true },
  { path: '/settings/policies', name: 'Policies', component: Policies, exact: true },
  { path: '/settings/upload-csv', name: 'Upload Csv', component: UploadCsv, exact: true },
  /***************************Users Section*****************************/
  { path: '/users/list', name: 'Users', component: Users, exact: true },
  { path: '/users/add', name: 'Add User', component: AddUser, exact: true },
  { path: '/users/edit/:id', name: 'Edit User', component: AddUser },


];

export default routes;
