// lib/main.dart

import 'package:flutter/material.dart';
import 'package:flutter_web_widgets/examples/scaffold_example.dart';

// Import all example files
import 'package:flutter_web_widgets/examples/appbar_example.dart';
import 'package:flutter_web_widgets/examples/sliverappbar_example.dart';
import 'package:flutter_web_widgets/examples/drawer_example.dart';
import 'package:flutter_web_widgets/examples/bottomnavigationbar_example.dart';
import 'package:flutter_web_widgets/examples/materialapp_example.dart';
import 'package:flutter_web_widgets/examples/container_example.dart';
import 'package:flutter_web_widgets/examples/padding_example.dart';
import 'package:flutter_web_widgets/examples/center_example.dart';
import 'package:flutter_web_widgets/examples/sizedbox_example.dart';
import 'package:flutter_web_widgets/examples/row_example.dart';
import 'package:flutter_web_widgets/examples/column_example.dart';
import 'package:flutter_web_widgets/examples/stack_example.dart';
import 'package:flutter_web_widgets/examples/expanded_example.dart';
import 'package:flutter_web_widgets/examples/elevatedbutton_example.dart';
import 'package:flutter_web_widgets/examples/filledbutton_example.dart';
import 'package:flutter_web_widgets/examples/outlinedbutton_example.dart';
import 'package:flutter_web_widgets/examples/textbutton_example.dart';
import 'package:flutter_web_widgets/examples/iconbutton_example.dart';
import 'package:flutter_web_widgets/examples/floatingactionbuttonfab_example.dart';
import 'package:flutter_web_widgets/examples/alertdialog_example.dart';
import 'package:flutter_web_widgets/examples/popupmenubutton_example.dart';
import 'package:flutter_web_widgets/examples/dropdownbutton_example.dart';
import 'package:flutter_web_widgets/examples/snackbar_example.dart';
import 'package:flutter_web_widgets/examples/tooltip_example.dart';
import 'package:flutter_web_widgets/examples/text_example.dart';
import 'package:flutter_web_widgets/examples/icon_example.dart';
import 'package:flutter_web_widgets/examples/image_example.dart';
import 'package:flutter_web_widgets/examples/card_example.dart';
import 'package:flutter_web_widgets/examples/chip_example.dart';
import 'package:flutter_web_widgets/examples/circularprogressindicator_example.dart';
import 'package:flutter_web_widgets/examples/textfield_example.dart';
import 'package:flutter_web_widgets/examples/textformfield_example.dart';
import 'package:flutter_web_widgets/examples/inputdecoration_example.dart';
import 'package:flutter_web_widgets/examples/form_example.dart';
import 'package:flutter_web_widgets/examples/listview_example.dart';
import 'package:flutter_web_widgets/examples/gridview_example.dart';
import 'package:flutter_web_widgets/examples/customscrollview_example.dart';
import 'package:flutter_web_widgets/examples/sliverlist_example.dart';
import 'package:flutter_web_widgets/examples/slivergrid_example.dart';
import 'package:flutter_web_widgets/examples/theme_example.dart';
import 'package:flutter_web_widgets/examples/themedata_example.dart';
import 'package:flutter_web_widgets/examples/mediaquery_example.dart';
import 'package:flutter_web_widgets/examples/colorscheme_example.dart';
import 'package:flutter_web_widgets/examples/backdropfilter_example.dart';
import 'package:flutter_web_widgets/examples/boxshadow_example.dart';
import 'package:flutter_web_widgets/examples/opacity_example.dart';
import 'package:flutter_web_widgets/examples/transform_example.dart';

// 2. Créer l'Map Registry dyalek
final Map<String, WidgetBuilder> examples = {
  // Structure & Layout
  "scaffold": (context) => const ScaffoldExample(),
  "appbar": (context) => const AppBarExample(),
  "sliverappbar": (context) => const SliverAppBarExample(),
  "drawer": (context) => const DrawerExample(),
  "bottomnavigationbar": (context) => const BottomNavigationBarExample(),
  "materialapp": (context) => const MaterialAppExample(),
  "container": (context) => const ContainerExample(),
  "padding": (context) => const PaddingExample(),
  "center": (context) => const CenterExample(),
  "sizedbox": (context) => const SizedBoxExample(),
  "row": (context) => const RowExample(),
  "column": (context) => const ColumnExample(),
  "stack": (context) => const StackExample(),
  "expanded": (context) => const ExpandedExample(),

  // Buttons & Actions
  "elevatedbutton": (context) => const ElevatedButtonExample(),
  "filledbutton": (context) => const FilledButtonExample(),
  "outlinedbutton": (context) => const OutlinedButtonExample(),
  "textbutton": (context) => const TextButtonExample(),
  "iconbutton": (context) => const IconButtonExample(),
  "floatingactionbutton": (context) => const FloatingActionButtonExample(),

  // Menus & Popups
  "alertdialog": (context) => const AlertDialogExample(),
  "popupmenubutton": (context) => const PopupMenuButtonExample(),
  "dropdownbutton": (context) => const DropdownButtonExample(),
  "snackbar": (context) => const SnackBarExample(),
  "tooltip": (context) => const TooltipExample(),

  // Data Display & Input
  "text": (context) => const TextExample(),
  "icon": (context) => const IconExample(),
  "image": (context) => const ImageExample(),
  "card": (context) => const CardExample(),
  "chip": (context) => const ChipExample(),
  "circularprogressindicator": (context) =>
      const CircularProgressIndicatorExample(),
  "textfield": (context) => const TextFieldExample(),
  "textformfield": (context) => const TextFormFieldExample(),
  "inputdecoration": (context) => const InputDecorationExample(),
  "form": (context) => const FormExample(),

  // List Views & Slivers
  "listview": (context) => const ListViewExample(),
  "gridview": (context) => const GridViewExample(),
  "customscrollview": (context) => const CustomScrollViewExample(),
  "sliverlist": (context) => const SliverListExample(),
  "slivergrid": (context) => const SliverGridExample(),

  // Theming & Effects
  "theme": (context) => const ThemeExample(),
  "themedata": (context) => const ThemeDataExample(),
  "mediaquery": (context) => const MediaQueryExample(),
  "colorscheme": (context) => const ColorSchemeExample(),
  "backdropfilter": (context) => const BackdropFilterExample(),
  "boxshadow": (context) => const BoxShadowExample(),
  "opacity": (context) => const OpacityExample(),
  "transform": (context) => const TransformExample(),
};

void main() {
  // 3. 9ra l'URL men l'navigateur
  final uri = Uri.base;

  // 4. Jbed l'valeur dyal paramètre 'example'
  final String? exampleName = uri.queryParameters['example'];

  // 5. L9a l'widget l'monassib f l'Map
  final WidgetBuilder? widgetBuilder = examples[exampleName];

  Widget homeWidget;

  if (widgetBuilder != null) {
    // Ila l9ina l'widget, n'affichiwh
    homeWidget = Builder(builder: widgetBuilder);
  } else {
    // Ila l'paramètre makaynch wla ghalet, n'affichiw message
    homeWidget = const Scaffold(
      body: Center(
        child: Text(
          'Example not found.\nPlease specify an example using "?example=widget_name"',
          textAlign: TextAlign.center,
        ),
      ),
    );
  }

  // 6. Lancer l'application b l'widget li khtarina
  runApp(MaterialApp(debugShowCheckedModeBanner: false, home: homeWidget));
}
