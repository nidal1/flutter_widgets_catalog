import 'package:flutter/material.dart';

class IconExample extends StatelessWidget {
  const IconExample({super.key});

  @override
  Widget build(BuildContext context) {
    return const Center(
      child: Icon(Icons.favorite, color: Colors.pink, size: 48.0),
    );
  }
}
