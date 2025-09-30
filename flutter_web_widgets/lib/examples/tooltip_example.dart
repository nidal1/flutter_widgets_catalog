import 'package:flutter/material.dart';

class TooltipExample extends StatelessWidget {
  const TooltipExample({super.key});

  @override
  Widget build(BuildContext context) {
    return const Center(
      child: Tooltip(
        message: 'I am a Tooltip',
        child: Icon(Icons.info, size: 48.0),
      ),
    );
  }
}
