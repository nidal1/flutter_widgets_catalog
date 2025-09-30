import 'package:flutter/material.dart';

class OpacityExample extends StatelessWidget {
  const OpacityExample({super.key});

  @override
  Widget build(BuildContext context) {
    return const Center(
      child: Opacity(opacity: 0.5, child: FlutterLogo(size: 150)),
    );
  }
}
